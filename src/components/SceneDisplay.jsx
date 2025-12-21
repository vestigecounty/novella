/**
 * SceneDisplay.jsx
 * Displays the current scene background image with optional pose variant
 */

import React from "react";
import "../styles/components.css";

const SceneDisplay = ({ scene, pose }) => {
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
            e.target.style.display = "none";
          }}
        />
      ) : (
        <div className="scene-placeholder">No scene loaded</div>
      )}
    </div>
  );
};

export default SceneDisplay;
