/**
 * MenuChoices.jsx
 * Choice selection interface component
 */

import React from 'react';
import '../styles/dialogue.css';

const MenuChoices = ({ choices, onSelect }) => {
  return (
    <div className="menu-choices">
      <div className="choices-container">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => onSelect(choice.target)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuChoices;
