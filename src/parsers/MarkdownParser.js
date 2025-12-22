/**
 * MarkdownParser.js
 * Parses visual novel markdown script into an Abstract Syntax Tree (AST)
 */

export class MarkdownParser {
  constructor() {
    this.sections = {};
    this.ast = [];
  }

  /**
   * Parse markdown script into sections
   * @param {string} markdown - Raw markdown content
   * @returns {Object} Parsed AST with sections and labels
   */
  parse(markdown) {
    const lines = markdown.split("\n");
    const sections = [];
    const labels = {};

    let currentLabel = null;
    let currentContent = [];
    let currentMetadata = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Detect section headers (# label_name)
      const headerMatch = trimmed.match(/^#\s+(\w+)\s*$/);
      if (headerMatch) {
        // Save previous section
        if (currentLabel) {
          sections.push({
            label: currentLabel,
            metadata: currentMetadata,
            content: currentContent,
          });
          labels[currentLabel] = sections.length - 1;
        }

        currentLabel = headerMatch[1];
        currentContent = [];
        currentMetadata = {};
        continue;
      }

      // Detect metadata (scene:, pose:, background:, music:, etc.)
      const sceneMatch = trimmed.match(/^scene:\s*(\w+)\s*$/);
      if (sceneMatch) {
        currentMetadata.scene = sceneMatch[1];
        continue;
      }

      const poseMatch = trimmed.match(/^pose:\s*(\w+)\s*$/);
      if (poseMatch) {
        currentMetadata.pose = poseMatch[1];
        // Create a pose content item so it can be processed during gameplay
        currentContent.push({
          type: "pose",
          pose: poseMatch[1],
        });
        continue;
      }

      const backgroundMatch = trimmed.match(/^background:\s*(.+)\s*$/);
      if (backgroundMatch) {
        currentMetadata.background = backgroundMatch[1];
        continue;
      }

      const musicMatch = trimmed.match(/^music:\s*(.+)\s*$/);
      if (musicMatch) {
        currentMetadata.music = musicMatch[1];
        continue;
      }

      // Skip empty lines
      if (!trimmed) {
        continue;
      }

      // Detect dialogue lines (**Character**: text) with optional alias definition
      // Supports: **Character (alias, #color)**: text
      const dialogueMatch = trimmed.match(/^\*\*(.+?)\*\*:\s*(.*)$/);
      if (dialogueMatch) {
        const characterPart = dialogueMatch[1];
        const text = dialogueMatch[2];

        // Check if character part has alias syntax: Name (alias, #color)
        // Support both ASCII and Cyrillic characters for alias
        const aliasMatch = characterPart.match(
          /^(.+?)\s*\(\s*([\w\u0400-\u04FF]+)\s*,\s*(#[\dA-Fa-f]{6})\s*\)$/,
        );

        if (aliasMatch) {
          const fullName = aliasMatch[1].trim();
          const alias = aliasMatch[2].trim();
          const color = aliasMatch[3].trim();

          currentContent.push({
            type: "dialogue",
            character: alias,
            text: text,
            characterDef: {
              alias: alias,
              fullName: fullName,
              color: color,
            },
          });
        } else {
          currentContent.push({
            type: "dialogue",
            character: characterPart,
            text: text,
          });
        }
        continue;
      }

      // Detect choice/link lines [text](#label)
      const choiceMatch = trimmed.match(/^\[(.+?)\]\(#(\w+)\)$/);
      if (choiceMatch) {
        currentContent.push({
          type: "choice",
          text: choiceMatch[1],
          target: choiceMatch[2],
        });
        continue;
      }

      // Treat as plain text dialogue (narrator)
      if (trimmed && !trimmed.startsWith("#")) {
        currentContent.push({
          type: "dialogue",
          character: "Narrator",
          text: trimmed,
        });
      }
    }

    // Save last section
    if (currentLabel) {
      sections.push({
        label: currentLabel,
        metadata: currentMetadata,
        content: currentContent,
      });
      labels[currentLabel] = sections.length - 1;
    }

    return {
      sections,
      labels,
    };
  }

  /**
   * Get a specific section by label
   * @param {string} label - Section label
   * @returns {Object} Section data or null
   */
  getSection(label) {
    return this.sections[label] || null;
  }

  /**
   * Get all labels
   * @returns {Array} Array of section labels
   */
  getLabels() {
    return Object.keys(this.sections);
  }
}

export default MarkdownParser;
