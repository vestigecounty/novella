/**
 * languages.js
 * Multi-language configuration for the visual novel
 */

export const LANGUAGES = {
  ru: {
    code: "ru",
    name: "Русский",
    flag: "🇷🇺",
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  de: {
    code: "de",
    name: "Deutsch",
    flag: "🇩🇪",
  },
  hr: {
    code: "hr",
    name: "Hrvatski",
    flag: "🇭🇷",
  },
};

// Default language
export const DEFAULT_LANGUAGE = "ru";

// Get language from URL parameter, localStorage, or default
export const getInitialLanguage = () => {
  // Check URL parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && LANGUAGES[urlLang]) {
    return urlLang;
  }

  // Check localStorage
  const savedLang = localStorage.getItem("novellaLanguage");
  if (savedLang && LANGUAGES[savedLang]) {
    return savedLang;
  }

  // Return default
  return DEFAULT_LANGUAGE;
};

// Save language preference
export const saveLanguagePreference = (lang) => {
  if (LANGUAGES[lang]) {
    localStorage.setItem("novellaLanguage", lang);
  }
};

// Get story file path for a language
export const getStoryFilePath = (lang) => {
  return `/scripts/story.${lang}.md`;
};
