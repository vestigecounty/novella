/**
 * GameContainer.jsx
 * Main game wrapper component that combines all elements
 */

import React, { useEffect, useRef, useState } from "react";
import DialogueBox from "./DialogueBox";
import MenuChoices from "./MenuChoices";
import SceneDisplay from "./SceneDisplay";
import useProgressiveText from "../hooks/useProgressiveText";
import "../styles/components.css";

const GameContainer = ({
  currentContent,
  choices,
  scene,
  pose,
  isLoading,
  error,
  gameEnded,
  onAdvance,
  onGoBack,
  onSelectChoice,
  onReset,
}) => {
  // Track if we just went back to skip animation
  const [skipAnimation, setSkipAnimation] = useState(false);
  const prevContentRef = useRef(null);

  // Use progressive text hook to consolidate click handling
  const isDialogue = currentContent?.type === "dialogue";
  const { displayedText, isAllDone, handleClick } = useProgressiveText(
    isDialogue ? currentContent.text : "",
    skipAnimation,
  );

  // Detect if content changed after goBack and reset skipAnimation
  useEffect(() => {
    if (
      skipAnimation &&
      currentContent?.text !== prevContentRef.current?.text
    ) {
      // Content changed - goBack was successful
      prevContentRef.current = currentContent;
      setSkipAnimation(false);
    } else if (
      skipAnimation &&
      currentContent?.text === prevContentRef.current?.text
    ) {
      // Content didn't change - we're at the start, reset without triggering animation reset
      setSkipAnimation(false);
    }
    if (!skipAnimation) {
      prevContentRef.current = currentContent;
    }
  }, [currentContent, skipAnimation]);

  // Throttle goBack to prevent rapid repeated calls
  const lastGoBackTimeRef = useRef(0);
  const GOBACK_THROTTLE_MS = 150;

  // Touch gesture handling for swipe
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const MIN_SWIPE_DISTANCE = 50;

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

  // Handle touch start for swipe detection
  const handleTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  // Handle touch move for swipe detection
  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  // Handle touch end for swipe detection
  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isRightSwipe) {
      // Swipe right = go back
      const now = Date.now();
      if (now - lastGoBackTimeRef.current >= GOBACK_THROTTLE_MS) {
        lastGoBackTimeRef.current = now;
        setSkipAnimation(true);
        onGoBack();
      }
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  // Handle keyboard input for advancing dialogue and going back
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space" && isDialogue) {
        e.preventDefault();
        if (isAllDone) {
          // All text is displayed, advance to next content
          onAdvance();
        } else {
          // Text is still animating, complete the animation
          handleClick();
        }
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        const now = Date.now();
        if (now - lastGoBackTimeRef.current >= GOBACK_THROTTLE_MS) {
          lastGoBackTimeRef.current = now;
          setSkipAnimation(true);
          onGoBack();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isDialogue, isAllDone, handleClick, onAdvance, onGoBack]);

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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={isDialogue ? { cursor: "pointer" } : {}}
    >
      <SceneDisplay scene={scene} pose={pose} />

      {currentContent.type === "dialogue" && (
        <DialogueBox
          character={currentContent.character}
          text={currentContent.text}
          displayedText={displayedText}
          isAllDone={isAllDone}
          color={currentContent.color}
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
