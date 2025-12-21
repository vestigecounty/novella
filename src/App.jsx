import GameContainer from "./components/GameContainer";
import useVisualNovel from "./hooks/useVisualNovel";
import storyScript from "../scripts/story.md?raw";
import "./App.css";

function App() {
  const {
    currentContent,
    choices,
    scene,
    isLoading,
    error,
    gameEnded,
    advance,
    selectChoice,
    reset,
  } = useVisualNovel(storyScript);

  return (
    <div className="app">
      <GameContainer
        currentContent={currentContent}
        choices={choices}
        scene={scene}
        isLoading={isLoading}
        error={error}
        gameEnded={gameEnded}
        onAdvance={advance}
        onSelectChoice={selectChoice}
        onReset={reset}
      />
    </div>
  );
}

export default App;
