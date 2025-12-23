/**
 * SceneDisplay.jsx
 * Displays the current scene background image with optional pose variant
 * Also renders character sprites with positioning and sizing
 */

import React from "react";
import "../styles/components.css";
import "../styles/dialogue.css";

const SceneDisplay = ({ scene, pose, sprites = [] }) => {
  // Construct image path with pose if available
  const imagePath = scene
    ? pose
      ? `/scenes/${scene}-${pose}.jpg`
      : `/scenes/${scene}.jpg`
    : null;

  return (
    <div className="scene-display">
      {imagePath ? (
        <img
          src={imagePath}
          alt={pose ? `${scene} (${pose})` : scene}
          className="scene-image"
          onError={(e) => {
            console.error(`Failed to load scene image: ${imagePath}`, e);
            e.target.style.display = "none";
          }}
          onLoad={(e) => {
            e.target.style.display = "block";
          }}
        />
      ) : (
        <div className="scene-placeholder">No scene loaded</div>
      )}

      {/* Render sprites layer */}
      {sprites && sprites.length > 0 && (
        <div className="sprite-layer">
          {sprites.map((sprite, index) => {
            const spriteImagePath = sprite.pose
              ? `/sprites/${sprite.character}-${sprite.pose}.png`
              : `/sprites/${sprite.character}.png`;

            return (
              <div
                key={`${sprite.character}-${index}`}
                className={`sprite-container ${sprite.position}`}
              >
                <img
                  src={spriteImagePath}
                  alt={`${sprite.character}`}
                  className={`sprite ${sprite.size}`}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SceneDisplay;
