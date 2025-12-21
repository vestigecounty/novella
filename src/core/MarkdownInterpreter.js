/**
 * MarkdownInterpreter.js
 * Core script interpreter that executes visual novel scripts
 */

export class MarkdownInterpreter {
  constructor(ast, gameStateManager, dialogueProcessor, variableStore) {
    this.ast = ast;
    this.gameState = gameStateManager;
    this.dialogue = dialogueProcessor;
    this.variables = variableStore;
    this.callbacks = new Map();
  }

  /**
   * Register a callback for events
   * @param {string} eventName - Event name
   * @param {Function} callback - Callback function
   */
  on(eventName, callback) {
    if (!this.callbacks.has(eventName)) {
      this.callbacks.set(eventName, []);
    }
    this.callbacks.get(eventName).push(callback);
  }

  /**
   * Emit an event
   * @param {string} eventName - Event name
   * @param {*} data - Event data
   */
  emit(eventName, data) {
    const handlers = this.callbacks.get(eventName);
    if (handlers) {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch (error) {
          console.error(`Error in ${eventName} handler:`, error);
        }
      }
    }
  }

  /**
   * Start script execution
   * @param {string} label - Starting label
   * @returns {Object} Initial content
   */
  start(label = 'start') {
    if (!this.gameState.start(label)) {
      this.emit('error', { message: `Label not found: ${label}` });
      return null;
    }

    this.emit('gameStart', { label });
    return this.getCurrentState();
  }

  /**
   * Get current state
   * @returns {Object} Current state
   */
  getCurrentState() {
    const section = this.gameState.getCurrentSection();
    if (!section) {
      return null;
    }

    const content = this.gameState.getCurrentContent();
    const scene = section.metadata?.scene;

    return {
      label: section.label,
      scene,
      content,
      isAtEnd: this.gameState.isAtSectionEnd(),
      metadata: section.metadata || {}
    };
  }

  /**
   * Advance through script
   * @returns {Object} Next state or null if game ends
   */
  advance() {
    // Try to advance within current section
    if (this.gameState.advance()) {
      const state = this.getCurrentState();
      this.emit('advance', state);
      return state;
    }

    // Move to next section
    if (this.gameState.nextSection()) {
      const state = this.getCurrentState();
      this.emit('sectionChange', state);
      return state;
    }

    // Game end
    this.emit('gameEnd', { label: this.gameState.getCurrentLabel() });
    return null;
  }

  /**
   * Make a choice
   * @param {string} targetLabel - Target label
   * @returns {Object} New state after choice
   */
  makeChoice(targetLabel) {
    if (!this.gameState.jump(targetLabel)) {
      this.emit('error', { message: `Invalid choice target: ${targetLabel}` });
      return null;
    }

    const state = this.getCurrentState();
    this.emit('choiceSelected', { target: targetLabel, state });
    return state;
  }

  /**
   * Get choices available in current content
   * @returns {Array} Array of choice objects
   */
  getChoices() {
    const content = this.gameState.getCurrentContent();

    if (!content || content.type !== 'choice') {
      // Collect all choices in current section
      const section = this.gameState.getCurrentSection();
      if (!section || !section.content) {
        return [];
      }

      const choices = [];
      for (let i = this.gameState.currentContentIndex; i < section.content.length; i++) {
        const item = section.content[i];
        if (item.type === 'choice') {
          choices.push(item);
        } else if (item.type === 'dialogue') {
          // Stop at next dialogue
          break;
        }
      }
      return choices;
    }

    return [content];
  }

  /**
   * Set a variable
   * @param {string} name - Variable name
   * @param {*} value - Variable value
   */
  setVariable(name, value) {
    this.variables.set(name, value);
    this.emit('variableChanged', { name, value });
  }

  /**
   * Get a variable
   * @param {string} name - Variable name
   * @param {*} defaultValue - Default value
   * @returns {*} Variable value
   */
  getVariable(name, defaultValue = null) {
    return this.variables.get(name, defaultValue);
  }

  /**
   * Evaluate a condition
   * @param {string} variable - Variable name
   * @param {string} operator - Comparison operator
   * @param {*} value - Value to compare
   * @returns {boolean} Result
   */
  evaluateCondition(variable, operator, value) {
    return this.variables.evaluateCondition(variable, operator, value);
  }

  /**
   * Jump to a label
   * @param {string} label - Target label
   * @returns {Object} New state
   */
  jump(label) {
    if (!this.gameState.jump(label)) {
      this.emit('error', { message: `Invalid jump target: ${label}` });
      return null;
    }

    const state = this.getCurrentState();
    this.emit('jump', { target: label, state });
    return state;
  }

  /**
   * Go back in history
   * @returns {boolean} Success
   */
  back() {
    if (!this.gameState.back()) {
      return false;
    }

    const state = this.getCurrentState();
    this.emit('back', state);
    return true;
  }

  /**
   * Save game state
   * @param {string} slotName - Save slot name
   */
  save(slotName) {
    this.gameState.createSaveState(slotName);
    this.emit('saved', { slot: slotName });
  }

  /**
   * Load game state
   * @param {string} slotName - Save slot name
   * @returns {boolean} Success
   */
  load(slotName) {
    if (!this.gameState.loadSaveState(slotName)) {
      this.emit('error', { message: `Save state not found: ${slotName}` });
      return false;
    }

    const state = this.getCurrentState();
    this.emit('loaded', { slot: slotName, state });
    return true;
  }

  /**
   * Get game progress
   * @returns {number} Progress percentage
   */
  getProgress() {
    return this.gameState.getProgress();
  }

  /**
   * Get play history
   * @returns {Array} Play history
   */
  getHistory() {
    return this.gameState.getPlayHistory();
  }

  /**
   * Reset game
   */
  reset() {
    this.gameState.reset();
    this.variables.clear();
    this.emit('reset', {});
  }

  /**
   * Get all available labels
   * @returns {Array} Array of labels
   */
  getLabels() {
    return this.gameState.navigation.getAllLabels();
  }

  /**
   * Get section by label
   * @param {string} label - Section label
   * @returns {Object|null} Section or null
   */
  getSection(label) {
    return this.gameState.navigation.getSection(label);
  }

  /**
   * Check if label exists
   * @param {string} label - Label to check
   * @returns {boolean}
   */
  hasLabel(label) {
    return this.gameState.navigation.hasLabel(label);
  }
}

export default MarkdownInterpreter;
