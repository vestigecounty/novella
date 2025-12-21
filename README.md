# Visual Novel Engine - Script Creator's Guide

A markdown-based visual novel engine for creating interactive stories. Write your stories in simple markdown syntax—no coding required.

## Quick Start

### What You'll Work With

```
novella/
├── scripts/             # Your story scripts go here
│   ├── story.en.md      # English version
│   ├── story.ru.md      # Russian version
│   ├── story.de.md      # German version
│   └── ...
└── public/
    ├── scenes/          # Background images (.jpg)
    ├── sprites/         # Character images (.png)
    └── videos/          # Video files (.mp4)
```

### Your First Script

Create a file in `scripts/` called `story.en.md`:

```markdown
# start
scene: park

It's a nice day at the park.

**Emma**: Hi! Want to go on an adventure?

[Yes, let's go!](#adventure)
[Maybe later](#decline)

# adventure
scene: forest

**Emma**: Great! Follow me!

# decline
scene: park

**Emma**: That's okay. See you around!
```

Put your images in:
- `public/scenes/park.jpg` — Background images
- `public/sprites/emma-happy.png` — Character sprites

That's it! You've created your first visual novel.

---

## Writing Scripts

### Sections and Labels

Stories are divided into sections using `#` followed by a unique name:

```markdown
# start
Your opening scene...

# chapter_two
Later in the story...

# bad_ending
One possible ending...
```

**Rules:**
- Always start with `# start`
- Use lowercase letters and underscores only
- Each label must be unique
- Labels are case-sensitive

### Backgrounds

Set the background at the start of each section:

```markdown
# start
scene: bedroom

**Hero**: Time to wake up!
```

This loads `/public/scenes/bedroom.jpg` as the background.

### Dialogue

Use bold text for character names, followed by a colon:

```markdown
**Emma**: Hello there!

**Hero**: Nice to meet you!

They shook hands.
```

**Adding Character Colors:**

Define a character's color on first appearance:

```markdown
**Princess Aurora (A, #FFB6C1)**: I'm delighted to meet you!
```

Format: `**Full Name (Alias, #HEXCOLOR)**: Dialogue`

Later, use the alias:

```markdown
**A**: This is much shorter to type!
```

**Plain Text (Narrator):**

Text without bold markers becomes narrator dialogue:

```markdown
The sun was setting over the distant mountains.

(Crickets chirping in the background)
```

### Character Sprites

Display character images on top of the scene:

```markdown
sprite: emma-happy center lg
```

**Format:** `sprite: {character-pose} {position} {size}`

**Positions:**
- `left-third` — Left side of screen
- `center` — Center of screen
- `right-third` — Right side of screen

**Sizes:**
- `sm` — Small
- `lg` — Large
- `xl` — Extra large

**Examples:**

```markdown
# meeting
scene: cafe

sprite: emma-happy left-third lg
sprite: james-surprised right-third lg

**Emma**: James! What a surprise!

**James**: I didn't expect to see you here!
```

**Hiding Sprites:**

Clear all sprites from screen:

```markdown
sprite:
```

**File Naming:**

The sprite `emma-happy` loads `/public/sprites/emma-happy.png`

### Player Choices

Create branching paths using markdown link syntax:

```markdown
**Emma**: Which path should we take?

[The forest path](#forest_route)
[The mountain path](#mountain_route)
[Go back home](#home)
```

**Format:** `[Choice text shown to player](#target_label)`

**Rules:**
- Each choice links to a section label
- The `#` before the label is required
- Target sections must exist (or you'll get an error)
- Players see all choices at once and pick one

### Special Features

**Achievements:**
```markdown
[Achievement unlocked **Master Detective**](#next)
```

**Embedded Videos:**

```markdown
Happy New Year! [video:celebration.mp4]
```

Videos load from `/public/videos/`

---

## Multiple Languages

### File Structure

The engine supports multiple languages through separate script files in the `scripts/` folder. Each language has its own script file named:

```
scripts/story.en.md    — English
scripts/story.ru.md    — Russian  
scripts/story.de.md    — German
etc.
```

### Adding a Language

1. Create `scripts/story.{code}.md` with your translation
2. Edit `src/config/languages.js`:

```javascript
export const LANGUAGES = {
  en: { code: "en", name: "English", flag: "🇬🇧" },
  fr: { code: "fr", name: "Français", flag: "🇫🇷" },  // Add this
};
```

That's it! The language will now appear in the language selector.

### Removing a Language

1. Delete `scripts/story.{code}.md`
2. Remove from `src/config/languages.js`
3. If needed, update `DEFAULT_LANGUAGE` in same file

Only translate the displayed text.

**Example:**

English (`scripts/story.en.md`):
```markdown
# start
scene: park

**Emma**: What a lovely day!

[Go for a walk](#walk)
[Stay here](#stay)
```

German (`scripts/story.de.md`):
```markdown
# start
scene: park

**Emma**: Was für ein schöner Tag!

[Spazieren gehen](#walk)
[Hier bleiben](#stay)
```

### Language Selection

Players can switch languages through:
- The in-game language selector menu (on opening dialogue)
- URL parameter: `?lang=de`
- Browser automatically remembers their choice

---

## Asset Preparation

### Background Scenes

**Location:** `/public/scenes/`  
**Format:** JPG  
**Naming:** `{scene-name}.jpg`

Example:
- Script: `scene: bedroom`
- File: `/public/scenes/bedroom.jpg`

### Character Sprites

**Location:** `/public/sprites/`  
**Format:** PNG (supports transparency)  
**Naming:** `{character}-{expression}.png`

Example:
- Script: `sprite: emma-happy center lg`
- File: `/public/sprites/emma-happy.png`

**Recommended Setup:**
- Create multiple expressions per character: `emma-happy.png`, `emma-sad.png`, `emma-angry.png`
- Use transparent backgrounds
- Keep consistent character sizes across sprites

### Videos

**Location:** `/public/videos/`  
**Format:** MP4 or web-compatible formats  
**Naming:** `{filename}.mp4`

Example:
- Script: `[video:intro.mp4]`
- File: `/public/videos/intro.mp4`

---

## Error Prevention

The engine validates your script automatically. Common errors:

**Missing Label:**
```markdown
# start
scene: park

[Go to town](#town)

# twon    ← Typo! Should be "town"
scene: city
```

**Duplicate Labels:**
```markdown
# start
scene: park

# start    ← Error! Label already used
scene: house
```

**Missing Scene:**
```markdown
# start
scene: missing_scene    ← If missing_scene.jpg doesn't exist, you'll see an error
```

---

Happy writing!
