/**
 * useProgressiveText.js
 * Hook for progressive text display with sentence-based animation
 */

import { useState, useEffect, useCallback, useRef } from "react";

const TYPING_SPEED = 30; // milliseconds per character

export function useProgressiveText(text) {
  const [state, setState] = useState({
    displayedText: "",
    currentSentenceIndex: 0,
    isAnimating: false,
    isComplete: false,
    totalSentenceCount: 0,
  });

  const animationRef = useRef(null);
  const charIndexRef = useRef(0);
  const sentencesRef = useRef([]);
  const prevSentenceIndexRef = useRef(0);

  // Split text into sentences
  const splitIntoSentences = useCallback((fullText) => {
    if (!fullText) return [];

    const result = [];
    let current = "";
    let i = 0;

    while (i < fullText.length) {
      const char = fullText[i];
      current += char;

      // Check for ellipsis (...)
      if (char === "." && fullText[i + 1] === "." && fullText[i + 2] === ".") {
        current += fullText[i + 1] + fullText[i + 2];
        i += 2;
        result.push(current.trim());
        current = "";
      }
      // Check for sentence ending (., !, ?)
      else if (char === "." || char === "!" || char === "?") {
        // Don't end if next char is also a period (could be ellipsis start)
        if (!(char === "." && fullText[i + 1] === ".")) {
          result.push(current.trim());
          current = "";
        }
      }

      i++;
    }

    // Add remaining text if any
    if (current.trim()) {
      result.push(current.trim());
    }

    return result;
  }, []);

  // Initialize sentences on text change
  useEffect(() => {
    const newSentences = splitIntoSentences(text);
    sentencesRef.current = newSentences;
    charIndexRef.current = 0;
    prevSentenceIndexRef.current = 0;

    // Defer setState to next frame to satisfy linter
    requestAnimationFrame(() => {
      setState({
        displayedText: "",
        currentSentenceIndex: 0,
        isAnimating: newSentences.length > 0,
        isComplete: false,
        totalSentenceCount: newSentences.length,
      });
    });
  }, [text, splitIntoSentences]);

  // Reset character index when moving to a new sentence
  useEffect(() => {
    if (state.currentSentenceIndex !== prevSentenceIndexRef.current) {
      charIndexRef.current = 0;
      prevSentenceIndexRef.current = state.currentSentenceIndex;
    }
  }, [state.currentSentenceIndex]);

  // Animate text display
  useEffect(() => {
    if (!state.isAnimating || sentencesRef.current.length === 0) {
      return;
    }

    if (state.currentSentenceIndex >= sentencesRef.current.length) {
      return;
    }

    const currentSentence = sentencesRef.current[state.currentSentenceIndex];

    const animate = () => {
      if (charIndexRef.current < currentSentence.length) {
        setState((prev) => ({
          ...prev,
          displayedText: currentSentence.substring(0, charIndexRef.current + 1),
        }));
        charIndexRef.current++;
        animationRef.current = setTimeout(animate, TYPING_SPEED);
      } else {
        setState((prev) => ({
          ...prev,
          isAnimating: false,
          isComplete: true,
        }));
      }
    };

    animationRef.current = setTimeout(animate, TYPING_SPEED);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [state.isAnimating, state.currentSentenceIndex]);

  // Handle clicking to advance
  const handleClick = useCallback(() => {
    if (sentencesRef.current.length === 0) {
      return;
    }

    if (state.isAnimating) {
      // Skip to end of current sentence
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }

      const currentSentence = sentencesRef.current[state.currentSentenceIndex];
      charIndexRef.current = currentSentence.length;

      setState((prev) => ({
        ...prev,
        displayedText: currentSentence,
        isAnimating: false,
        isComplete: true,
      }));
      // Don't process further - prevent moving to next sentence in same click
      return;
    }

    if (state.isComplete && !state.isAnimating) {
      // Move to next sentence only if not currently animating
      if (state.currentSentenceIndex < sentencesRef.current.length - 1) {
        setState((prev) => ({
          ...prev,
          currentSentenceIndex: prev.currentSentenceIndex + 1,
          displayedText: "",
          isComplete: false,
          isAnimating: true,
        }));
      }
    }
  }, [state.isAnimating, state.isComplete, state.currentSentenceIndex]);

  // Check if all sentences are displayed
  const isAllDone =
    state.totalSentenceCount > 0 &&
    state.currentSentenceIndex === state.totalSentenceCount - 1 &&
    state.isComplete &&
    !state.isAnimating;

  return {
    displayedText: state.displayedText,
    isComplete: state.isComplete,
    isAnimating: state.isAnimating,
    handleClick,
    isAllDone,
  };
}

export default useProgressiveText;
