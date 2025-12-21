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

export function useVisualNovel(scriptText, skipReset = false) {
  const [currentContent, setCurrentContent] = useState(null);
  const [choices, setChoices] = useState([]);
  const [scene, setScene] = useState(null);
  const [pose, setPose] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  const interpreterRef = useRef(null);
  const gameStateRef = useRef(null);
  const charactersRef = useRef(null);
  const initializedRef = useRef(false);
  const currentPositionRef = useRef(null);

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

      // Register МС with custom color
      characters.register("МС", {
        name: "МС",
        color: "#FF6B9D",
        displayName: "МС",
      });

      // Register Г (protagonist) with custom color
      characters.register("Г", {
        name: "Г",
        color: "#87CEEB",
        displayName: "Г",
      });

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
      let initialContent = gameState.getCurrentContent();
      let initialSection = gameState.getCurrentSection();
      let initialScene = initialSection?.metadata?.scene;
      let initialPose = initialSection?.metadata?.pose;

      // Skip pose items at the start
      while (initialContent?.type === "pose") {
        initialPose = initialContent.pose;
        gameState.advance();
        initialContent = gameState.getCurrentContent();
        initialSection = gameState.getCurrentSection();
      }

      setScene(initialScene);
      setPose(initialPose);

      if (initialContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: initialContent.character,
          text: initialContent.text,
          displayName: initialContent.character,
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
      const newPose = newSection?.metadata?.pose;
      setScene(newScene);
      setPose(newPose);

      if (newContent?.type === "pose") {
        // Update pose and automatically advance
        setPose(newContent.pose);
        // Recursively advance to skip pose items
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: nextContent.character,
            text: nextContent.text,
            displayName: nextContent.character,
            color: charactersRef.current.getColor(nextContent.character),
          });
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
            setCurrentContent({
              type: "dialogue",
              character: furtherContent.character,
              text: furtherContent.text,
              displayName: furtherContent.character,
              color: charactersRef.current.getColor(furtherContent.character),
            });
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
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
          color: charactersRef.current.getColor(newContent.character),
        });
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

      if (newContent?.type === "pose") {
        // Update pose and automatically advance
        setPose(newContent.pose);
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: nextContent.character,
            text: nextContent.text,
            displayName: nextContent.character,
            color: charactersRef.current.getColor(nextContent.character),
          });
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
            setCurrentContent({
              type: "dialogue",
              character: furtherContent.character,
              text: furtherContent.text,
              displayName: furtherContent.character,
              color: charactersRef.current.getColor(furtherContent.character),
            });
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
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
          color: charactersRef.current.getColor(newContent.character),
        });
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
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
          color: charactersRef.current.getColor(newContent.character),
        });
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

      if (newContent?.type === "pose") {
        // Update pose and automatically advance
        setPose(newContent.pose);
        gameState.advance();
        const nextContent = gameState.getCurrentContent();
        const nextSection = gameState.getCurrentSection();

        if (nextContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: nextContent.character,
            text: nextContent.text,
            displayName: nextContent.character,
            color: charactersRef.current.getColor(nextContent.character),
          });
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
            setCurrentContent({
              type: "dialogue",
              character: furtherContent.character,
              text: furtherContent.text,
              displayName: furtherContent.character,
              color: charactersRef.current.getColor(furtherContent.character),
            });
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
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
          color: charactersRef.current.getColor(newContent.character),
        });
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
        const variables = new VariableStore();
        const navigation = new NavigationHelper(ast);
        const dialogue = new DialogueProcessor(characters, variables);
        const gameState = new GameStateManager(ast, navigation, variables);
        const interpreter = new MarkdownInterpreter(ast, gameState, dialogue);

        interpreterRef.current = interpreter;
        gameStateRef.current = gameState;
        gameState.initialize("start");

        let initialContent = gameState.getCurrentContent();
        let initialSection = gameState.getCurrentSection();
        let initialScene = initialSection?.metadata?.scene;
        let initialPose = initialSection?.metadata?.pose;

        // Skip pose items at the start
        while (initialContent?.type === "pose") {
          initialPose = initialContent.pose;
          gameState.advance();
          initialContent = gameState.getCurrentContent();
          initialSection = gameState.getCurrentSection();
        }

        setScene(initialScene);
        setPose(initialPose);

        if (initialContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: initialContent.character,
            text: initialContent.text,
            displayName: initialContent.character,
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
