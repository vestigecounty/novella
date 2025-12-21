/**
 * VariableStore.js
 * Manages game variables and state
 */

export class VariableStore {
  constructor() {
    this.variables = new Map();
    this.listeners = new Set();
  }

  /**
   * Set a variable value
   * @param {string} name - Variable name
   * @param {*} value - Variable value
   */
  set(name, value) {
    const oldValue = this.variables.get(name);
    this.variables.set(name, value);

    // Notify listeners of change
    if (oldValue !== value) {
      this.notifyListeners(name, value, oldValue);
    }
  }

  /**
   * Get a variable value
   * @param {string} name - Variable name
   * @param {*} defaultValue - Default value if variable doesn't exist
   * @returns {*} Variable value
   */
  get(name, defaultValue = null) {
    return this.variables.has(name) ? this.variables.get(name) : defaultValue;
  }

  /**
   * Check if variable exists
   * @param {string} name - Variable name
   * @returns {boolean}
   */
  has(name) {
    return this.variables.has(name);
  }

  /**
   * Delete a variable
   * @param {string} name - Variable name
   */
  delete(name) {
    this.variables.delete(name);
  }

  /**
   * Clear all variables
   */
  clear() {
    this.variables.clear();
  }

  /**
   * Get all variables as object
   * @returns {Object} Variables object
   */
  getAll() {
    const obj = {};
    for (const [key, value] of this.variables) {
      obj[key] = value;
    }
    return obj;
  }

  /**
   * Set multiple variables
   * @param {Object} obj - Object with variable names and values
   */
  setAll(obj) {
    for (const [key, value] of Object.entries(obj)) {
      this.set(key, value);
    }
  }

  /**
   * Subscribe to variable changes
   * @param {Function} callback - Function called on any variable change
   * @returns {Function} Unsubscribe function
   */
  subscribe(callback) {
    this.listeners.add(callback);

    // Return unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }

  /**
   * Notify all listeners of a change
   * @param {string} name - Variable name
   * @param {*} newValue - New value
   * @param {*} oldValue - Old value
   */
  notifyListeners(name, newValue, oldValue) {
    for (const listener of this.listeners) {
      try {
        listener({ name, newValue, oldValue });
      } catch (error) {
        console.error('Error in variable listener:', error);
      }
    }
  }

  /**
   * Increment a numeric variable
   * @param {string} name - Variable name
   * @param {number} amount - Amount to increment
   */
  increment(name, amount = 1) {
    const current = this.get(name, 0);
    this.set(name, current + amount);
  }

  /**
   * Evaluate a condition
   * @param {string} variable - Variable name
   * @param {string} operator - Comparison operator (==, !=, <, >, <=, >=)
   * @param {*} value - Value to compare
   * @returns {boolean} Result of comparison
   */
  evaluate(variable, operator, value) {
    const varValue = this.get(variable);

    switch (operator) {
      case '==':
      case '===':
        return varValue === value;
      case '!=':
      case '!==':
        return varValue !== value;
      case '<':
        return varValue < value;
      case '>':
        return varValue > value;
      case '<=':
        return varValue <= value;
      case '>=':
        return varValue >= value;
      default:
        console.warn(`Unknown operator: ${operator}`);
        return false;
    }
  }
}

export default VariableStore;
