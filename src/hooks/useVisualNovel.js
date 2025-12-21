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

export function useVisualNovel(scriptText) {
  const [currentContent, setCurrentContent] = useState(null);
  const [choices, setChoices] = useState([]);
  const [scene, setScene] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  const interpreterRef = useRef(null);
  const gameStateRef = useRef(null);
  const initializedRef = useRef(false);

  // Initialize game engine on script load
  useEffect(() => {
    if (!scriptText || initializedRef.current) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

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
      const variables = new VariableStore();
      const navigation = new NavigationHelper(ast);
      const dialogue = new DialogueProcessor(characters, variables);
      const gameState = new GameStateManager(ast, navigation, variables);
      const interpreter = new MarkdownInterpreter(ast, gameState, dialogue);

      interpreterRef.current = interpreter;
      gameStateRef.current = gameState;

      // Initialize game
      gameState.initialize("start");

      // Get initial content
      const initialContent = gameState.getCurrentContent();
      const initialSection = gameState.getCurrentSection();
      const initialScene = initialSection?.metadata?.scene;

      setScene(initialScene);

      if (initialContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: initialContent.character,
          text: initialContent.text,
          displayName: initialContent.character,
        });
        setChoices([]);
      } else if (initialContent?.type === "choice") {
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
      initializedRef.current = true;
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
      setScene(newScene);

      if (newContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
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
      setScene(newScene);

      if (newContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
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
      setScene(newScene);

      if (newContent?.type === "dialogue") {
        setCurrentContent({
          type: "dialogue",
          character: newContent.character,
          text: newContent.text,
          displayName: newContent.character,
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

        const initialContent = gameState.getCurrentContent();
        const initialSection = gameState.getCurrentSection();
        const initialScene = initialSection?.metadata?.scene;

        setScene(initialScene);

        if (initialContent?.type === "dialogue") {
          setCurrentContent({
            type: "dialogue",
            character: initialContent.character,
            text: initialContent.text,
            displayName: initialContent.character,
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
    isLoading,
    error,
    gameEnded,
    advance,
    selectChoice,
    reset,
  };
}

export default useVisualNovel;
