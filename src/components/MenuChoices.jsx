/**
 * MenuChoices.jsx
 * Choice selection interface component
 */

import React from "react";
import Achievement from "./Achievement";
import "../styles/dialogue.css";

const MenuChoices = ({ choices, onSelect }) => {
  const parseChoiceText = (text) => {
    const parts = [];
    let lastIndex = 0;
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: text.substring(lastIndex, match.index),
        });
      }
      parts.push({
        type: "achievement",
        content: match[1],
      });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({
        type: "text",
        content: text.substring(lastIndex),
      });
    }

    if (parts.length === 0) {
      return [
        {
          type: "text",
          content: text,
        },
      ];
    }

    return parts;
  };

  const renderChoiceText = (text) => {
    const parsed = parseChoiceText(text);
    return parsed.map((item, index) => {
      if (item.type === "achievement") {
        return <Achievement key={`achievement-${index}`} name={item.content} />;
      }
      return <span key={`text-${index}`}>{item.content}</span>;
    });
  };

  return (
    <div className="menu-choices">
      <div className="choices-container">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => onSelect(choice.target)}
          >
            {renderChoiceText(choice.text)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuChoices;
