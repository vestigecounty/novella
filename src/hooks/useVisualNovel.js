/**
 * useVisualNovel.js
 * Main hook for visual novel game logic and state management
 */

import { useState, useEffect, useCallback, useRef } from "react";
import MarkdownParser from "../parsers/MarkdownParser";
import ScriptValidator from "../parsers/ScriptValidator";
import CharacterRegistry from "../utils/CharacterRegistry";
import VariableStore from "../utils/VariableStore";
import NavigationHelper from "../utils/NavigationHelper";
import DialogueProcessor from "../core/DialogueProcessor";
import GameStateManager from "../core/GameStateManager";
import MarkdownInterpreter from "../core/MarkdownInterpreter";
import AssetPreloader from "../utils/AssetPreloader";

export function useVisualNovel(scriptText, skipReset = false) {
  const [currentContent, setCurrentContent] = useState(null);
  const [choices, setChoices] = useState([]);
  const [scene, setScene] = useState(null);
  const [pose, setPose] = useState(null);
  const [sprites, setSprites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  const interpreterRef = useRef(null);
  const gameStateRef = useRef(null);
  const charactersRef = useRef(null);
  const initializedRef = useRef(false);
  const currentPositionRef = useRef(null);
  const preloaderRef = useRef(new AssetPreloader());

  // Helper function to preload upcoming assets
  const preloadUpcomingAssets = useCallback(() => {
    if (!gameStateRef.current) return;

    const gameState = gameStateRef.current;
    const preloader = preloaderRef.current;
    const upcomingAssets = preloader.extractUpcomingAssets(
      gameState.ast,
      gameState.currentSectionIndex,
      gameState.currentContentIndex,
    );

    if (upcomingAssets.length > 0) {
      preloader.preloadImages(upcomingAssets).catch((err) => {
        console.error("Error preloading assets:", err);
      });
    }
  }, []);

  // Helper function to skip pose, sprite, and hide-sprites items and update state
  const skipNonContentItems = (gameState, setterFunctions = {}) => {
    let content = gameState.getCurrentContent();
    let spritesList = [];

    while (
      content?.type === "pose" ||
      content?.type === "sprite" ||
      content?.type === "hide-sprites"
    ) {
      if (content.type === "pose") {
        if (setterFunctions.setPose) {
          setterFunctions.setPose(content.pose);
        }
      } else if (content.type === "sprite") {
        // Merge sprite with existing sprites or replace based on character
        spritesList = spritesList.filter(
          (s) => s.character !== content.character,
        );
        spritesList.push({
          character: content.character,
          position: content.position,
          size: content.size,
          pose: gameState.getCurrentSection()?.metadata?.pose || null,
        });
      } else if (content.type === "hide-sprites") {
        // Clear all sprites
        spritesList = [];
      }
      gameState.advance();
      content = gameState.getCurrentContent();
    }

    if (setterFunctions.setSprites) {
      setterFunctions.setSprites(spritesList);
    }
    return content;
  };

  // Preload upcoming assets whenever content changes
  useEffect(() => {
    preloadUpcomingAssets();
  }, [currentContent, preloadUpcomingAssets]);

  // Initialize game engine on script load
  useEffect(() => {
    if (!scriptText) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Save current position before reinitializing (for hot reload)
      if (skipReset && gameStateRef.current) {
        currentPositionRef.current = {
          label: gameStateRef.current.getCurrentLabel(),
          contentIndex: gameStateRef.current.currentContentIndex,
        };
      }

      setGameEnded(false);

      // Parse script
      const parser = new MarkdownParser();
      const ast = parser.parse(scriptText);

      // Validate script
      const validator = new ScriptValidator();
      const validation = validator.validate(ast);

      if (!validation.isValid) {
        throw new Error(
          `Script validation failed: ${validation.errors.join(", ")}`,
        );
      }

      // Initialize all components
      const characters = new CharacterRegistry();

      // Scan AST for aliased characters and register them
      for (const section of ast.sections) {
        for (const item of section.content) {
          if (item.type === "dialogue" && item.characterDef) {
            const { alias, fullName, color } = item.characterDef;
            characters.registerAlias(fullName, alias, color);
          }
        }
      }

      charactersRef.current = characters;

      const variables = new VariableStore();
      const navigation = new NavigationHelper(ast);
      const dialogue = new DialogueProcessor(characters, variables);
      const gameState = new GameStateManager(ast, navigation, variables);
      const interpreter = new MarkdownInterpreter(ast, gameState, dialogue);

      interpreterRef.current = interpreter;
      gameStateRef.current = gameState;

      // Initialize game
      gameState.initialize("start");

      // Restore position if we're hot-reloading
      if (skipReset && currentPositionRef.current) {
        const savedPosition = currentPositionRef.current;
        if (gameState.jump(savedPosition.label)) {
          // Jump succeeded, now advance to the saved content index
          while (gameState.currentContentIndex < savedPosition.contentIndex) {
            if (!gameState.advance()) break;
          }
        }
      }

      // Get initial content
      let initialSection = gameState.getCurrentSection();
      let initialScene = initialSection?.metadata?.scene;
      let initialPose = initialSection?.metadata?.pose || null;

      setScene(initialScene);

      // Skip pose and sprite items at the start (this will also set sprites from inline directives)
      const initialContent = skipNonContentItems(gameState, {
        setPose: setPose,
        setSprites: setSprites,
      });

      initialSection = gameState.getCurrentSection();

      if (initialContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: characters.getDisplayName(initialContent.character),
          text: initialContent.text,
          displayName: characters.getDisplayName(initialContent.character),
          color: characters.getColor(initialContent.character),
        });
      } else if (initialContent?.type === "choices") {
        // Collect all choices in section
        const sectionChoices = initialSection.content.filter(
          (item) => item.type === "choice",
        );
        setCurrentContent({
          type: "choices",
          choices: sectionChoices,
        });
        setChoices(sectionChoices);
      }

      setIsLoading(false);
    } catch (err) {
      console.error("Error initializing visual novel:", err);
      setError(err.message);
      setIsLoading(false);
    }
  }, [scriptText]);

  // Helper function to create dialogue content
  const createDialogueContent = (character, text) => {
    return {
      type: "dialogue",
      character: charactersRef.current.getDisplayName(character),
      text: text,
      displayName: charactersRef.current.getDisplayName(character),
      color: charactersRef.current.getColor(character),
    };
  };

  // Advance to next content
  const advance = useCallback(() => {
    if (!gameStateRef.current || gameEnded) {
      return;
    }

    const gameState = gameStateRef.current;

    // Try to advance within section
    if (gameState.advance()) {
      const newContent = gameState.getCurrentContent();
      const newSection = gameState.getCurrentSection();
      const newScene = newSection?.metadata?.scene;
      setScene(newScene);

      // Update sprites from section metadata
      if (newSection?.metadata?.sprites) {
        const spritesWithPose = newSection.metadata.sprites.map((sprite) => ({
          ...sprite,
          pose: newSection?.metadata?.pose || null,
        }));
        setSprites(spritesWithPose);
      }

      // Don't update pose from section metadata when advancing within section
      // Only update pose when we encounter a pose item or change sections

      if (newContent?.type === "sprite") {
        // Update sprite and automatically advance
        const currentSprites = [...(sprites || [])];
        const spriteIndex = currentSprites.findIndex(
          (s) => s.character === newContent.character,
        );
        const updatedSprite = {
          character: newContent.character,
          position: newContent.position,
          size: newContent.size,
          pose: newSection?.metadata?.pose || null,
        };
        if (spriteIndex >= 0) {
          currentSprites[spriteIndex] = updatedSprite;
        } else {
          currentSprites.push(updatedSprite);
        }
        // Don't call setSprites yet - advance first to check for more sprites
        gameState.advance();
        let nextContent = gameState.getCurrentContent();
        let nextSection = gameState.getCurrentSection();

        // Process any additional consecutive sprites
        while (nextContent?.type === "sprite") {
          const additionalSpriteIndex = currentSprites.findIndex(
            (s) => s.character === nextContent.character,
          );
          const additionalSprite = {
            character: nextContent.character,
            position: nextContent.position,
            size: nextContent.size,
            pose: nextSection?.metadata?.pose || null,
          };
          if (additionalSpriteIndex >= 0) {
            currentSprites[additionalSpriteIndex] = additionalSprite;
          } else {
            currentSprites.push(additionalSprite);
          }
          gameState.advance();
          nextContent = gameState.getCurrentContent();
          nextSection = gameState.getCurrentSection();
        }

        // Now set all sprites at once
        setSprites(currentSprites);

        if (nextContent?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(nextContent.character, nextContent.text),
          );
          setChoices([]);
        } else if (nextContent?.type === "choice") {
          const sectionChoices = nextSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (nextContent?.type === "pose") {
          return advance();
        }
        return;
      }

      if (newContent?.type === "hide-sprites") {
        // Clear all sprites
        setSprites([]);
        // Automatically advance to next content
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(nextContent.character, nextContent.text),
          );
          setChoices([]);
        } else if (nextContent?.type === "choice") {
          const sectionChoices = nextSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (
          nextContent?.type === "sprite" ||
          nextContent?.type === "hide-sprites" ||
          nextContent?.type === "pose"
        ) {
          // Skip multiple consecutive non-dialogue items by recursing
          return advance();
        }
        return;
      }

      if (newContent?.type === "pose") {
        // Update pose and automatically advance
        setPose(newContent.pose);
        // Recursively advance to skip pose items
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(nextContent.character, nextContent.text),
          );
          setChoices([]);
        } else if (nextContent?.type === "choice") {
          const sectionChoices = nextSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (nextContent?.type === "pose") {
          // Skip multiple consecutive pose items
          setPose(nextContent.pose);
          gameState.advance();
          const furtherContent = gameState.getCurrentContent();
          const furtherSection = gameState.getCurrentSection();

          if (furtherContent?.type === "dialogue") {
            setCurrentContent(
              createDialogueContent(
                furtherContent.character,
                furtherContent.text,
              ),
            );
            setChoices([]);
          } else if (furtherContent?.type === "choice") {
            const sectionChoices = furtherSection.content.filter(
              (item) => item.type === "choice",
            );
            setCurrentContent({
              type: "choices",
              choices: sectionChoices,
            });
            setChoices(sectionChoices);
          }
        }
      } else if (newContent?.type === "dialogue") {
        setCurrentContent(
          createDialogueContent(newContent.character, newContent.text),
        );
        setChoices([]);
      } else if (newContent?.type === "choice") {
        const sectionChoices = newSection.content.filter(
          (item) => item.type === "choice",
        );
        setCurrentContent({
          type: "choices",
          choices: sectionChoices,
        });
        setChoices(sectionChoices);
      }
      return;
    }

    // Try to move to next section
    if (gameState.nextSection()) {
      const newContent = gameState.getCurrentContent();
      const newSection = gameState.getCurrentSection();
      const newScene = newSection?.metadata?.scene;
      const newPose = newSection?.metadata?.pose;
      setScene(newScene);
      setPose(newPose);

      // Update sprites from section metadata
      if (newSection?.metadata?.sprites) {
        const spritesWithPose = newSection.metadata.sprites.map((sprite) => ({
          ...sprite,
          pose: newPose || null,
        }));
        setSprites(spritesWithPose);
      } else {
        setSprites([]);
      }

      if (newContent?.type === "sprite") {
        // Process all consecutive sprite items
        let currentSprites = [...(sprites || [])];
        let content = newContent;
        let currentSection = newSection;

        while (content?.type === "sprite") {
          const spriteIndex = currentSprites.findIndex(
            (s) => s.character === content.character,
          );
          const updatedSprite = {
            character: content.character,
            position: content.position,
            size: content.size,
            pose: currentSection?.metadata?.pose || null,
          };
          if (spriteIndex >= 0) {
            currentSprites[spriteIndex] = updatedSprite;
          } else {
            currentSprites.push(updatedSprite);
          }
          gameState.advance();
          content = gameState.getCurrentContent();
          currentSection = gameState.getCurrentSection();
        }

        setSprites(currentSprites);

        if (content?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(content.character, content.text),
          );
          setChoices([]);
        } else if (content?.type === "choice") {
          const sectionChoices = currentSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (content?.type === "pose") {
          setPose(content.pose);
          gameState.advance();
          const furtherContent = gameState.getCurrentContent();
          const furtherSection = gameState.getCurrentSection();

          if (furtherContent?.type === "dialogue") {
            setCurrentContent(
              createDialogueContent(
                furtherContent.character,
                furtherContent.text,
              ),
            );
            setChoices([]);
          }
        }
        return;
      } else if (newContent?.type === "hide-sprites") {
        // Clear all sprites
        setSprites([]);
        // Automatically advance to next content
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(nextContent.character, nextContent.text),
          );
          setChoices([]);
        } else if (nextContent?.type === "choice") {
          const sectionChoices = nextSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (
          nextContent?.type === "sprite" ||
          nextContent?.type === "hide-sprites" ||
          nextContent?.type === "pose"
        ) {
          return selectChoice(targetLabel);
        }
        return;
      } else if (newContent?.type === "pose") {
        // Update pose and automatically advance
        setPose(newContent.pose);
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent(
            createDialogueContent(nextContent.character, nextContent.text),
          );
          setChoices([]);
        } else if (nextContent?.type === "choice") {
          const sectionChoices = nextSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        } else if (nextContent?.type === "pose") {
          setPose(nextContent.pose);
          gameState.advance();
          const furtherContent = gameState.getCurrentContent();
          const furtherSection = gameState.getCurrentSection();

          if (furtherContent?.type === "dialogue") {
            setCurrentContent(
              createDialogueContent(
                furtherContent.character,
                furtherContent.text,
              ),
            );
            setChoices([]);
          } else if (furtherContent?.type === "choice") {
            const sectionChoices = furtherSection.content.filter(
              (item) => item.type === "choice",
            );
            setCurrentContent({
              type: "choices",
              choices: sectionChoices,
            });
            setChoices(sectionChoices);
          }
        }
      } else if (newContent?.type === "dialogue") {
        setCurrentContent(
          createDialogueContent(newContent.character, newContent.text),
        );
        setChoices([]);
      } else if (newContent?.type === "choice") {
        const sectionChoices = newSection.content.filter(
          (item) => item.type === "choice",
        );
        setCurrentContent({
          type: "choices",
          choices: sectionChoices,
        });
        setChoices(sectionChoices);
      }
      return;
    }

    // Game ended
    setGameEnded(true);
    setCurrentContent({
      type: "end",
      text: "The End",
    });
    setChoices([]);
  }, [gameEnded]);

  // Go back to previous content
  const goBack = useCallback(() => {
    if (!gameStateRef.current || gameEnded) {
      return;
    }

    const gameState = gameStateRef.current;

    if (gameState.goBack()) {
      const newContent = gameState.getCurrentContent();
      const newSection = gameState.getCurrentSection();
      const newScene = newSection?.metadata?.scene;
      const newPose = newSection?.metadata?.pose;
      setScene(newScene);
      setPose(newPose);

      // Update sprites from section metadata
      if (newSection?.metadata?.sprites) {
        const spritesWithPose = newSection.metadata.sprites.map((sprite) => ({
          ...sprite,
          pose: newPose || null,
        }));
        setSprites(spritesWithPose);
      } else {
        setSprites([]);
      }

      if (newContent?.type === "pose") {
        setPose(newContent.pose);
        setCurrentContent({
          type: "dialogue",
          character: "",
          text: "",
          displayName: "",
          color: "",
        });
        setChoices([]);
      } else if (newContent?.type === "dialogue") {
        setCurrentContent(
          createDialogueContent(newContent.character, newContent.text),
        );
        setChoices([]);
      } else if (newContent?.type === "choice") {
        const sectionChoices = newSection.content.filter(
          (item) => item.type === "choice",
        );
        setCurrentContent({
          type: "choices",
          choices: sectionChoices,
        });
        setChoices(sectionChoices);
      }
    }
  }, [gameEnded]);

  // Handle choice selection
  const selectChoice = useCallback((targetLabel) => {
    if (!gameStateRef.current) {
      return;
    }

    const gameState = gameStateRef.current;

    if (gameState.jump(targetLabel)) {
      const newContent = gameState.getCurrentContent();
      const newSection = gameState.getCurrentSection();
      const newScene = newSection?.metadata?.scene;
      const newPose = newSection?.metadata?.pose;
      setScene(newScene);
      setPose(newPose);

      // Use skipNonContentItems to handle pose/sprite/hide-sprites at start of section
      const contentAfterSkip = skipNonContentItems(gameState, {
        setPose: setPose,
        setSprites: setSprites,
      });

      if (contentAfterSkip?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: charactersRef.current.getDisplayName(
            contentAfterSkip.character,
          ),
          text: contentAfterSkip.text,
          displayName: charactersRef.current.getDisplayName(
            contentAfterSkip.character,
          ),
          color: charactersRef.current.getColor(contentAfterSkip.character),
        });
        setChoices([]);
      } else if (contentAfterSkip?.type === "choice") {
        const sectionChoices = newSection.content.filter(
          (item) => item.type === "choice",
        );
        setCurrentContent({
          type: "choices",
          choices: sectionChoices,
        });
        setChoices(sectionChoices);
      }
    }
  }, []);

  // Reset game
  const reset = useCallback(() => {
    initializedRef.current = false;
    setGameEnded(false);
    setError(null);

    // Re-initialize with the same script
    if (scriptText) {
      setIsLoading(true);
      try {
        const parser = new MarkdownParser();
        const ast = parser.parse(scriptText);
        const validator = new ScriptValidator();
        const validation = validator.validate(ast);

        if (!validation.isValid) {
          throw new Error(
            `Script validation failed: ${validation.errors.join(", ")}`,
          );
        }

        const characters = new CharacterRegistry();

        // Scan AST for aliased characters and register them
        for (const section of ast.sections) {
          for (const item of section.content) {
            if (item.type === "dialogue" && item.characterDef) {
              const { alias, fullName, color } = item.characterDef;
              characters.registerAlias(fullName, alias, color);
            }
          }
        }

        const variables = new VariableStore();
        const navigation = new NavigationHelper(ast);
        const dialogue = new DialogueProcessor(characters, variables);
        const gameState = new GameStateManager(ast, navigation, variables);
        const interpreter = new MarkdownInterpreter(ast, gameState, dialogue);

        interpreterRef.current = interpreter;
        gameStateRef.current = gameState;
        gameState.initialize("start");

        let initialSection = gameState.getCurrentSection();
        let initialScene = initialSection?.metadata?.scene;
        let initialPose = initialSection?.metadata?.pose;

        setScene(initialScene);

        // Skip pose and sprite items at the start (this will also set sprites from inline directives)
        const initialContent = skipNonContentItems(gameState, {
          setPose: setPose,
          setSprites: setSprites,
        });

        initialSection = gameState.getCurrentSection();

        if (initialContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: characters.getDisplayName(initialContent.character),
            text: initialContent.text,
            displayName: characters.getDisplayName(initialContent.character),
            color: characters.getColor(initialContent.character),
          });
          setChoices([]);
        } else if (initialContent?.type === "choice") {
          const sectionChoices = initialSection.content.filter(
            (item) => item.type === "choice",
          );
          setCurrentContent({
            type: "choices",
            choices: sectionChoices,
          });
          setChoices(sectionChoices);
        }

        setIsLoading(false);
        initializedRef.current = true;
      } catch (err) {
        console.error("Error resetting game:", err);
        setError(err.message);
        setIsLoading(false);
      }
    }
  }, [scriptText]);

  return {
    currentContent,
    choices,
    scene,
    pose,
    sprites,
    isLoading,
    error,
    gameEnded,
    advance,
    goBack,
    selectChoice,
    reset,
  };
}

export default useVisualNovel;
