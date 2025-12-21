import { useState, useEffect } from "react";
import GameContainer from "./components/GameContainer";
import useVisualNovel from "./hooks/useVisualNovel";
import storyScript from "../scripts/story.md?raw";
import "./App.css";

function App() {
  const [script, setScript] = useState(storyScript);
  const [skipReset, setSkipReset] = useState(false);

  // Hot reload the script when it changes via HMR
  useEffect(() => {
    if (!import.meta.hot) return;

    import.meta.hot.accept(["../scripts/story.md?raw"], async ([newModule]) => {
      if (newModule) {
        setSkipReset(true);
        setScript(newModule.default);
      }
    });
  }, []);

  const {
    currentContent,
    choices,
    scene,
    pose,
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

  return (
    <div className="app">
      <GameContainer
        currentContent={currentContent}
        choices={choices}
        scene={scene}
        pose={pose}
        isLoading={isLoading}
        error={error}
        gameEnded={gameEnded}
        onAdvance={advance}
        onGoBack={goBack}
        onSelectChoice={selectChoice}
        onReset={reset}
      />
    </div>
  );
}

export default App;
