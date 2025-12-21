/**
 * DialogueBox.jsx
 * ADV-style dialogue display component with progressive text
 */

import React from "react";
import { Mouse } from "lucide-react";
import "../styles/dialogue.css";

const DialogueBox = ({ character, displayedText, isAllDone, text }) => {
  return (
    <div className="dialogue-box">
      <div className="dialogue-content">
        <div className="character-name">
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
};

export default DialogueBox;
