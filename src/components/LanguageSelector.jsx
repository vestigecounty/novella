/**
 * LanguageSelector.jsx
 * Language selection dropdown component
 */

import React, { useState } from "react";
import { LANGUAGES } from "../config/languages";
import "../styles/language-selector.css";

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (langCode) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const currentLang = LANGUAGES[currentLanguage];

  const handleContainerClick = (e) => {
    // Stop event propagation to prevent dialogue advance
    e.stopPropagation();
  };

  return (
    <div className="language-selector" onClick={handleContainerClick}>
      <div className="language-selector-padding">
        <button
          className="language-selector-button"
          onClick={toggleDropdown}
          aria-label="Select language"
        >
          <span className="language-flag">{currentLang.flag}</span>
          <span className="language-name">{currentLang.name}</span>
          <span className="language-arrow">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="language-dropdown">
            {Object.values(LANGUAGES).map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${
                  lang.code === currentLanguage ? "active" : ""
                }`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
                {lang.code === currentLanguage && (
                  <span className="language-checkmark">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
