/**
 * DialogueBox.jsx
 * ADV-style dialogue display component with progressive text
 * Optimized with React.memo to prevent unnecessary re-renders
 */

import React, { memo } from "react";
import { Mouse } from "lucide-react";
import "../styles/dialogue.css";

const DialogueBox = memo(
  ({ character, displayedText, isAllDone, text, color }) => {
    return (
      <div className="dialogue-box">
        <div className="dialogue-content">
          <div className="character-name" style={{ color: color || "#ffd700" }}>
            {character && character !== "Narrator" ? character : ""}
          </div>
          <div className="dialogue-text dialogue-text-container">
            <div className="dialogue-text-invisible">{text}</div>
            <div className="dialogue-text-visible">
              {displayedText}
              {isAllDone && (
                <span className="advance-icon">
                  <Mouse size={16} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DialogueBox.displayName = "DialogueBox";

export default DialogueBox;
