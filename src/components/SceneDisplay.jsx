/**
 * SceneDisplay.jsx
 * Displays the current scene background image
 */

import React from 'react';
import '../styles/components.css';

const SceneDisplay = ({ scene }) => {
  return (
    <div className="scene-display">
      {scene ? (
        <img
          src={`/scenes/${scene}.jpg`}
          alt={scene}
          className="scene-image"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <div className="scene-placeholder">No scene loaded</div>
      )}
    </div>
  );
};

export default SceneDisplay;
