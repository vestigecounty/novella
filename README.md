App Structure
visual-novel-engine/  
├── public/  
│   └── index.html  
├── src/  
│   ├── App.jsx                    # Main app component  
│   ├── core/  
│   │   ├── MarkdownInterpreter.js # Core script interpreter  
│   │   ├── GameStateManager.js    # Game state and navigation  
│   │   └── DialogueProcessor.js   # Text and character handling  
│   ├── components/  
│   │   ├── GameContainer.jsx      # Main game wrapper  
│   │   ├── DialogueBox.jsx        # ADV-style dialogue display  
│   │   ├── NVLBox.jsx            # Full-screen text display  
│   │   ├── MenuChoices.jsx       # Choice selection interface  
│   │   └── SceneDisplay.jsx      # Combined scene rendering  
│   ├── hooks/  
│   │   ├── useVisualNovel.js     # Main game hook  
│   │   ├── useInterpreter.js     # Script execution hook  
│   │   └── useDialogue.js        # Dialogue state hook  
│   ├── parsers/  
│   │   ├── MarkdownParser.js     # Parse Markdown to AST  
│   │   ├── CommandParser.js      # Parse custom commands  
│   │   └── ScriptValidator.js    # Validate script structure  
│   ├── utils/  
│   │   ├── CharacterRegistry.js  # Character definitions  
│   │   ├── VariableStore.js      # Game variables  
│   │   └── NavigationHelper.js   # Label/jump utilities  
│   └── styles/  
│       ├── dialogue.css          # Dialogue styling  
│       └── components.css        # Component styles  
├── scripts/  
│   └── story.md                  # Your visual novel script  
└── package.json  
New SceneDisplay Component
SceneDisplay.jsx
const SceneDisplay = ({ scene }) => {  
  return (  
    <div className="scene-display">  
      {scene && (  
        <img   
          src={`/scenes/${scene}.jpg`}  
          alt={scene}  
          className="scene-image"  
        />  
      )}  
    </div>  
  );  
};
Updated GameContainer.jsx
import { useVisualNovel } from '../hooks/useVisualNovel';  
import DialogueBox from './DialogueBox';  
import MenuChoices from './MenuChoices';  
import SceneDisplay from './SceneDisplay';  
  
const GameContainer = ({ script }) => {  
  const {   
    currentContent,   
    choices,   
    selectChoice,   
    advance   
  } = useVisualNovel(script);  
  
  return (  
    <div className="game-container">  
      <SceneDisplay scene={currentContent.scene} />  
        
      {currentContent.type === 'dialogue' && (  
        <DialogueBox   
          character={currentContent.character}  
          text={currentContent.text}  
          onAdvance={advance}  
        />  
      )}  
        
      {currentContent.type === 'choices' && (  
        <MenuChoices   
          choices={choices}  
          onSelect={selectChoice}  
        />  
      )}  
    </div>  
  );  
};
Updated Markdown Script Format
# start  
scene: meadow_sylvie  
**Narrator**: Welcome to our story!  
  
**Sylvie**: Hello! What would you like to do?  
  
[Play a game](#game_path)  
[Read a book](#book_path)  
  
# game_path  
scene: room_games  
**Sylvie**: Games are fun! Let's play together.  
  
# book_path  
scene: library_books  
**Sylvie**: Books take you on adventures.
Notes
The core interpreter and game logic remain unchanged - only the rendering layer is simplified. The SceneDisplay component handles both background and character rendering through pre-composed images, similar to how Ren'Py's layered images work but simplified for your use case layeredimage.rst:5-16 .

Your markdown script now includes scene: directives to specify which merged image to display, making asset management simpler while maintaining the same narrative flow.

Wiki pages you might want to explore:
