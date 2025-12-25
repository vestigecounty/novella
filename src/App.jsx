import { useState, useEffect } from "react";
import GameContainer from "./components/GameContainer";
import useVisualNovel from "./hooks/useVisualNovel";
import {
  getInitialLanguage,
  saveLanguagePreference,
  DEFAULT_LANGUAGE,
} from "./config/languages";
import "./App.css";

// Dynamic import function for story files
const loadStory = async (lang) => {
  try {
    const module = await import(`../scripts/story.${lang}.md?raw`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load story for language: ${lang}`, error);
    // Fallback to default language
    if (lang !== DEFAULT_LANGUAGE) {
      const fallback = await import(
        `../scripts/story.${DEFAULT_LANGUAGE}.md?raw`
      );
      return fallback.default;
    }
    throw error;
  }
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage());
  const [script, setScript] = useState(null);
  const [skipReset, setSkipReset] = useState(false);
  const [isLoadingScript, setIsLoadingScript] = useState(true);

  // Load initial story
  useEffect(() => {
    const initializeStory = async () => {
      setIsLoadingScript(true);
      const story = await loadStory(language);
      setScript(story);
      setIsLoadingScript(false);
    };
    initializeStory();
  }, []);

  // Handle language change
  const handleLanguageChange = async (newLang) => {
    setLanguage(newLang);
    saveLanguagePreference(newLang);
    setIsLoadingScript(true);
    const story = await loadStory(newLang);
    setScript(story);
    setIsLoadingScript(false);
    setSkipReset(false); // Force full reset when changing language
  };

  // Hot reload the script when it changes via HMR (dev only)
  useEffect(() => {
    if (!import.meta.hot) return;

    // Accept HMR for all language story files (Vite requires string literals)
    import.meta.hot.accept(
      [
        "../scripts/story.ru.md?raw",
        "../scripts/story.en.md?raw",
        "../scripts/story.de.md?raw",
        "../scripts/story.hr.md?raw",
      ],
      async (modules) => {
        // Find which module was updated and if it matches current language
        const ruModule = modules[0];
        const enModule = modules[1];
        const deModule = modules[2];
        const hrModule = modules[3];

        if (language === "ru" && ruModule) {
          setSkipReset(true);
          setScript(ruModule.default);
        } else if (language === "en" && enModule) {
          setSkipReset(true);
          setScript(enModule.default);
        } else if (language === "de" && deModule) {
          setSkipReset(true);
          setScript(deModule.default);
        } else if (language === "hr" && hrModule) {
          setSkipReset(true);
          setScript(hrModule.default);
        }
      },
    );
  }, [language]);

  const {
    currentContent,
    choices,
    scene,
    pose,
    sprites,
    isLoading,
    error,
    gameEnded,
    advance,
    goBack,
    selectChoice,
    reset,
  } = useVisualNovel(script, skipReset);

  // Reset the skipReset flag after the reload is complete
  useEffect(() => {
    if (skipReset && !isLoading) {
      setSkipReset(false);
    }
  }, [skipReset, isLoading]);

  // Show loading state while script is being loaded
  if (isLoadingScript || !script) {
    return (
      <div className="app">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <GameContainer
        currentContent={currentContent}
        choices={choices}
        scene={scene}
        pose={pose}
        sprites={sprites}
        isLoading={isLoading}
        error={error}
        gameEnded={gameEnded}
        onAdvance={advance}
        onGoBack={goBack}
        onSelectChoice={selectChoice}
        onReset={reset}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </div>
  );
}

export default App;
