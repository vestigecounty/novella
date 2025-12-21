/**
 * GameStateManager.js
 * Manages game state, progress, and navigation through the visual novel
 */

export class GameStateManager {
  constructor(ast, navigationHelper, variableStore) {
    this.ast = ast;
    this.navigation = navigationHelper;
    this.variables = variableStore;

    this.currentSectionIndex = 0;
    this.currentContentIndex = 0;
    this.visitedSections = new Set();
    this.playHistory = [];
    this.saveStates = new Map();
  }

  /**
   * Initialize game state
   * @param {string} startLabel - Label to start from (default: 'start')
   */
  initialize(startLabel = "start") {
    const startIndex = this.navigation.getLabelIndex(startLabel);
    if (startIndex === -1) {
      console.error(`Start label "${startLabel}" not found`);
      return false;
    }

    this.currentSectionIndex = startIndex;
    this.currentContentIndex = 0;
    this.visitedSections.clear();
    this.playHistory = [];
    this.variables.clear();

    this.markSectionVisited();
    return true;
  }

  /**
   * Get current section
   * @returns {Object} Current section object
   */
  getCurrentSection() {
    return this.ast.sections[this.currentSectionIndex];
  }

  /**
   * Get current section label
   * @returns {string} Current section label
   */
  getCurrentLabel() {
    const section = this.getCurrentSection();
    return section?.label || null;
  }

  /**
   * Get current content item
   * @returns {Object|null} Current content item or null
   */
  getCurrentContent() {
    const section = this.getCurrentSection();
    if (!section || !section.content) {
      return null;
    }

    return section.content[this.currentContentIndex] || null;
  }

  /**
   * Get current scene name
   * @returns {string|null} Current scene name
   */
  getCurrentScene() {
    const section = this.getCurrentSection();
    return section?.metadata?.scene || null;
  }

  /**
   * Advance to next content item in current section
   * @returns {boolean} True if advanced, false if at end of section
   */
  advance() {
    const section = this.getCurrentSection();
    if (!section || !section.content) {
      return false;
    }

    if (this.currentContentIndex < section.content.length - 1) {
      this.currentContentIndex++;
      this.addToPlayHistory({
        type: "advance",
        label: this.getCurrentLabel(),
        contentIndex: this.currentContentIndex,
      });
      return true;
    }

    return false;
  }

  /**
   * Jump to a specific section
   * @param {string} label - Target section label
   * @returns {boolean} True if jump successful
   */
  jump(label) {
    const targetIndex = this.navigation.getLabelIndex(label);
    if (targetIndex === -1) {
      console.error(`Jump target "${label}" not found`);
      return false;
    }

    this.currentSectionIndex = targetIndex;
    this.currentContentIndex = 0;
    this.markSectionVisited();

    this.addToPlayHistory({
      type: "jump",
      from: this.getCurrentLabel(),
      to: label,
    });

    return true;
  }

  /**
   * Move to next section
   * @returns {boolean} True if next section exists
   */
  nextSection() {
    if (this.currentSectionIndex < this.ast.sections.length - 1) {
      this.currentSectionIndex++;
      this.currentContentIndex = 0;
      this.markSectionVisited();
      return true;
    }
    return false;
  }

  /**
   * Check if at end of current section
   * @returns {boolean}
   */
  isAtSectionEnd() {
    const section = this.getCurrentSection();
    if (!section || !section.content) {
      return true;
    }
    return this.currentContentIndex >= section.content.length - 1;
  }

  /**
   * Check if at end of game
   * @returns {boolean}
   */
  isGameEnd() {
    return (
      this.currentSectionIndex >= this.ast.sections.length - 1 &&
      this.isAtSectionEnd()
    );
  }

  /**
   * Mark current section as visited
   */
  markSectionVisited() {
    const label = this.getCurrentLabel();
    if (label) {
      this.visitedSections.add(label);
    }
  }

  /**
   * Check if section was visited
   * @param {string} label - Section label
   * @returns {boolean}
   */
  hasVisited(label) {
    return this.visitedSections.has(label);
  }

  /**
   * Get visited sections count
   * @returns {number}
   */
  getVisitedCount() {
    return this.visitedSections.size;
  }

  /**
   * Get all visited section labels
   * @returns {Array}
   */
  getVisitedLabels() {
    return Array.from(this.visitedSections);
  }

  /**
   * Add event to play history
   * @param {Object} event - Event object
   */
  addToPlayHistory(event) {
    this.playHistory.push({
      ...event,
      timestamp: Date.now(),
    });
  }

  /**
   * Get play history
   * @returns {Array} Play history events
   */
  getPlayHistory() {
    return [...this.playHistory];
  }

  /**
   * Create a save state
   * @param {string} slotName - Save slot name
   * @returns {Object} Save state object
   */
  createSaveState(slotName) {
    const saveState = {
      slotName,
      timestamp: Date.now(),
      sectionIndex: this.currentSectionIndex,
      contentIndex: this.currentContentIndex,
      variables: this.variables.getAll(),
      visited: Array.from(this.visitedSections),
      history: this.getPlayHistory(),
    };

    this.saveStates.set(slotName, saveState);
    return saveState;
  }

  /**
   * Load a save state
   * @param {string} slotName - Save slot name
   * @returns {boolean} True if load successful
   */
  loadSaveState(slotName) {
    const saveState = this.saveStates.get(slotName);
    if (!saveState) {
      console.error(`Save state "${slotName}" not found`);
      return false;
    }

    this.currentSectionIndex = saveState.sectionIndex;
    this.currentContentIndex = saveState.contentIndex;
    this.variables.setAll(saveState.variables);
    this.visitedSections = new Set(saveState.visited);
    this.playHistory = [...saveState.history];

    return true;
  }

  /**
   * Get all save states
   * @returns {Map} Map of save states
   */
  getSaveStates() {
    return new Map(this.saveStates);
  }

  /**
   * Delete a save state
   * @param {string} slotName - Save slot name
   */
  deleteSaveState(slotName) {
    this.saveStates.delete(slotName);
  }

  /**
   * Clear all save states
   */
  clearSaveStates() {
    this.saveStates.clear();
  }

  /**
   * Get game progress percentage
   * @returns {number} Progress 0-100
   */
  getProgress() {
    const totalSections = this.ast.sections.length;
    return Math.round((this.visitedSections.size / totalSections) * 100);
  }

  /**
   * Get current state as object
   * @returns {Object} Current state
   */
  getState() {
    return {
      label: this.getCurrentLabel(),
      sectionIndex: this.currentSectionIndex,
      contentIndex: this.currentContentIndex,
      scene: this.getCurrentScene(),
      content: this.getCurrentContent(),
      isAtEnd: this.isAtSectionEnd(),
      isGameEnd: this.isGameEnd(),
      progress: this.getProgress(),
      visited: this.getVisitedCount(),
    };
  }

  /**
   * Reset game state
   */
  reset() {
    this.currentSectionIndex = 0;
    this.currentContentIndex = 0;
    this.visitedSections.clear();
    this.playHistory = [];
    this.initialize();
  }
}

export default GameStateManager;
