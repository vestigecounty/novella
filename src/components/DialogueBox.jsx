/**
 * DialogueBox.jsx
 * ADV-style dialogue display component with progressive text
 * Optimized with React.memo to prevent unnecessary re-renders
 */

import React, { memo } from "react";
import { Mouse } from "lucide-react";
import Achievement from "./Achievement";
import "../styles/dialogue.css";

const DialogueBox = memo(
  ({ character, displayedText, isAllDone, text, color }) => {
    // Parse text on-demand to find achievement badges
    const parseText = (fullText) => {
      const parts = [];
      let lastIndex = 0;
      const boldRegex = /\*\*(.*?)\*\*/g;
      let match;

      while ((match = boldRegex.exec(fullText)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            type: "text",
            content: fullText.substring(lastIndex, match.index),
          });
        }
        parts.push({
          type: "achievement",
          content: match[1],
        });
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < fullText.length) {
        parts.push({
          type: "text",
          content: fullText.substring(lastIndex),
        });
      }

      return parts.length > 0 ? parts : [{ type: "text", content: fullText }];
    };

    const renderContent = (displayText) => {
      if (!text || !displayText) return displayText;

      // Parse the DISPLAYED text (current sentence), not the full text
      // This is crucial because progressive text shows one sentence at a time
      const parsedText = parseText(displayText);
      if (!parsedText || parsedText.length === 0) return displayText;

      // If displayText doesn't contain ** markers, return as-is (achievements not displayed yet)
      if (!displayText.includes("**")) {
        return displayText;
      }

      // Reconstruct the displayed text with achievement badges
      const result = [];
      let pos = 0;

      for (const item of parsedText) {
        if (item.type === "achievement") {
          const achievementText = `**${item.content}**`;
          const remaining = displayText.substring(pos);

          if (remaining.startsWith(achievementText)) {
            // Achievement is complete - render badge
            result.push(
              <Achievement
                key={`achievement-${result.length}`}
                name={item.content}
              />,
            );
            pos += achievementText.length;
          } else if (remaining.startsWith(achievementText.substring(0, 2))) {
            // Achievement is partially started
            result.push(<span key={`text-${result.length}`}>{remaining}</span>);
            break;
          } else {
            // Show remaining
            if (remaining) {
              result.push(
                <span key={`text-${result.length}`}>{remaining}</span>,
              );
            }
            break;
          }
        } else {
          // Regular text
          const remaining = displayText.substring(pos);
          if (remaining.startsWith(item.content)) {
            result.push(
              <span key={`text-${result.length}`}>{item.content}</span>,
            );
            pos += item.content.length;
          } else {
            if (remaining) {
              result.push(
                <span key={`text-${result.length}`}>{remaining}</span>,
              );
            }
            break;
          }
        }
      }

      return result.length > 0 ? result : displayText;
    };

    return (
      <div className="dialogue-box">
        <div className="dialogue-content">
          <div className="character-name" style={{ color: color || "#ffd700" }}>
            {character && character !== "Narrator" ? character : ""}
          </div>
          <div className="dialogue-text dialogue-text-container">
            <div className="dialogue-text-invisible">{text}</div>
            <div className="dialogue-text-visible">
              {renderContent(displayedText)}
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
