/**
 * Achievement.jsx
 * Displays achievement badges with perimeter highlight animation
 */

import React from 'react';
import '../styles/achievement.css';

const Achievement = ({ name }) => {
  return (
    <span className="achievement-badge">
      <span className="achievement-content">
        <span className="achievement-star">★</span>
        <span className="achievement-name">{name}</span>
        <span className="achievement-star">★</span>
      </span>
    </span>
  );
};

export default Achievement;
