/**
 * DialogueBox.jsx
 * ADV-style dialogue display component with progressive text
 */

import React from "react";
import { Mouse } from "lucide-react";
import "../styles/dialogue.css";

const DialogueBox = ({ character, displayedText, isAllDone }) => {
  return (
    <div className="dialogue-box">
      <div className="dialogue-content">
        {character && character !== "Narrator" && (
          <div className="character-name">{character}</div>
        )}
        <div className="dialogue-text">
          {displayedText}
          {isAllDone && (
            <span className="advance-icon">
              <Mouse size={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
