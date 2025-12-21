/**
 * GameContainer.jsx
 * Main game wrapper component that combines all elements
 */

import React from "react";
import DialogueBox from "./DialogueBox";
import MenuChoices from "./MenuChoices";
import SceneDisplay from "./SceneDisplay";
import useProgressiveText from "../hooks/useProgressiveText";
import "../styles/components.css";

const GameContainer = ({
  currentContent,
  choices,
  scene,
  isLoading,
  error,
  gameEnded,
  onAdvance,
  onSelectChoice,
  onReset,
}) => {
  // Use progressive text hook to consolidate click handling
  const isDialogue = currentContent?.type === "dialogue";
  const { displayedText, isAllDone, handleClick } = useProgressiveText(
    isDialogue ? currentContent.text : "",
  );

  // Single source of truth for click handling during dialogue
  const handleContainerClick = (e) => {
    if (isDialogue) {
      e.stopPropagation();
      if (isAllDone) {
        // All text is displayed, advance to next content
        onAdvance();
      } else {
        // Text is still animating, complete the animation
        handleClick();
      }
    }
  };

  if (isLoading) {
    return (
      <div className="game-container loading">
        <div className="loading-message">Loading game...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="game-container error">
        <div className="error-message">Error: {error}</div>
        <button onClick={onReset} className="reset-button">
          Reset Game
        </button>
      </div>
    );
  }

  if (!currentContent) {
    return (
      <div className="game-container empty">
        <div className="empty-message">No content</div>
      </div>
    );
  }

  return (
    <div
      className="game-container"
      onClick={handleContainerClick}
      style={isDialogue ? { cursor: "pointer" } : {}}
    >
      <SceneDisplay scene={scene} />

      {currentContent.type === "dialogue" && (
        <DialogueBox
          character={currentContent.character}
          displayedText={displayedText}
          isAllDone={isAllDone}
        />
      )}

      {currentContent.type === "choices" && (
        <MenuChoices choices={choices} onSelect={onSelectChoice} />
      )}

      {currentContent.type === "end" && (
        <div className="dialogue-box end-message">
          <div className="dialogue-content">
            <div className="dialogue-text">{currentContent.text}</div>
            <button onClick={onReset} className="reset-button">
              Play Again
            </button>
          </div>
        </div>
      )}

      {gameEnded && (
        <div className="game-end-overlay">
          <div className="game-end-content">
            <h2>Story Complete</h2>
            <button onClick={onReset} className="reset-button">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
