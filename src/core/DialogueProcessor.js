/**
 * DialogueProcessor.js
 * Processes and manages dialogue text rendering
 */

export class DialogueProcessor {
  constructor() {
    this.dialogueHistory = [];
  }

  /**
   * Process dialogue content
   * @param {string} character - Character name
   * @param {string} text - Dialogue text
   * @returns {Object} Processed dialogue object
   */
  processDialogue(character, text) {
    return {
      character: character || 'Narrator',
      text: this.parseText(text),
      raw: text,
      timestamp: Date.now()
    };
  }

  /**
   * Parse text for special formatting
   * @param {string} text - Raw text
   * @returns {string} Parsed text
   */
  parseText(text) {
    let parsed = text;

    // Replace emphasis markers
    parsed = parsed.replace(/\*\*(.*?)\*\*/g, '$1'); // Remove bold markers
    parsed = parsed.replace(/\*(.*?)\*/g, '$1'); // Remove italic markers
    parsed = parsed.replace(/__(.*?)__/g, '$1'); // Remove underline markers

    return parsed.trim();
  }

  /**
   * Split long text into pages for display
   * @param {string} text - Text to split
   * @param {number} charsPerPage - Characters per page
   * @returns {Array} Array of text pages
   */
  paginateText(text, charsPerPage = 200) {
    const pages = [];
    let currentPage = '';

    const words = text.split(' ');

    for (const word of words) {
      if ((currentPage + ' ' + word).length > charsPerPage && currentPage) {
        pages.push(currentPage.trim());
        currentPage = word;
      } else {
        currentPage += (currentPage ? ' ' : '') + word;
      }
    }

    if (currentPage) {
      pages.push(currentPage.trim());
    }

    return pages;
  }

  /**
   * Add dialogue to history
   * @param {Object} dialogue - Dialogue object
   */
  addToHistory(dialogue) {
    this.dialogueHistory.push({
      ...dialogue,
      id: this.dialogueHistory.length
    });
  }

  /**
   * Get dialogue history
   * @returns {Array} All dialogue history
   */
  getHistory() {
    return [...this.dialogueHistory];
  }

  /**
   * Clear history
   */
  clearHistory() {
    this.dialogueHistory = [];
  }

  /**
   * Format dialogue for display
   * @param {Object} dialogue - Dialogue object
   * @returns {string} Formatted dialogue string
   */
  formatDialogue(dialogue) {
    const { character, text } = dialogue;
    if (character === 'Narrator') {
      return text;
    }
    return `${character}: ${text}`;
  }

  /**
   * Extract character mentions from text
   * @param {string} text - Text to search
   * @returns {Array} Array of mentioned character names
   */
  extractCharacterMentions(text) {
    // Match **Name**: pattern
    const matches = text.match(/\*\*([^*]+)\*\*:/g);
    if (!matches) return [];
    return matches.map(m => m.replace(/\*\*/g, '').replace(':', ''));
  }

  /**
   * Check if text contains special markers
   * @param {string} text - Text to check
   * @returns {Object} Object with boolean flags for each marker type
   */
  checkForMarkers(text) {
    return {
      hasEmphasis: /\*\*(.*?)\*\*/.test(text),
      hasItalic: /\*(.*?)\*/.test(text),
      hasUnderline: /__(.*?)__/.test(text),
      hasLinks: /\[.*?\]\(.*?\)/.test(text)
    };
  }
}

export default DialogueProcessor;
