/**
 * ScriptValidator.js
 * Validates visual novel script structure and integrity
 */

export class ScriptValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  /**
   * Validate a parsed script AST
   * @param {Object} ast - Parsed script AST
   * @returns {Object} Validation result with errors and warnings
   */
  validate(ast) {
    this.errors = [];
    this.warnings = [];

    if (!ast) {
      this.errors.push('Script AST is empty or null');
      return this.getResult();
    }

    if (!ast.sections || !Array.isArray(ast.sections)) {
      this.errors.push('Script must contain sections array');
      return this.getResult();
    }

    if (ast.sections.length === 0) {
      this.errors.push('Script must contain at least one section');
      return this.getResult();
    }

    // Validate each section
    const labelSet = new Set();
    ast.sections.forEach((section, index) => {
      this.validateSection(section, index, labelSet);
    });

    // Check for dangling references
    this.validateReferences(ast);

    return this.getResult();
  }

  /**
   * Validate a single section
   * @param {Object} section - Section to validate
   * @param {number} index - Section index
   * @param {Set} labelSet - Set of all labels
   */
  validateSection(section, index, labelSet) {
    // Check for required label
    if (!section.label || typeof section.label !== 'string') {
      this.errors.push(`Section ${index} must have a valid label`);
      return;
    }

    // Check for duplicate labels
    if (labelSet.has(section.label)) {
      this.errors.push(`Duplicate label: "${section.label}"`);
    }
    labelSet.add(section.label);

    // Validate content
    if (!Array.isArray(section.content)) {
      this.warnings.push(`Section "${section.label}" has no content`);
      return;
    }

    // Validate dialogue and choices
    section.content.forEach((item, itemIndex) => {
      if (item.type === 'dialogue') {
        if (!item.text) {
          this.warnings.push(`Empty dialogue in section "${section.label}" at index ${itemIndex}`);
        }
      } else if (item.type === 'choice') {
        if (!item.target) {
          this.errors.push(`Choice without target in section "${section.label}"`);
        }
      }
    });
  }

  /**
   * Validate that all choice targets and jumps reference valid labels
   * @param {Object} ast - Parsed AST
   */
  validateReferences(ast) {
    const validLabels = new Set(ast.sections.map(s => s.label));

    ast.sections.forEach((section) => {
      if (!Array.isArray(section.content)) return;

      section.content.forEach((item) => {
        if (item.type === 'choice' && item.target) {
          if (!validLabels.has(item.target)) {
            this.errors.push(`Invalid target "${item.target}" in section "${section.label}"`);
          }
        }

        if (item.type === 'jump' && item.target) {
          if (!validLabels.has(item.target)) {
            this.errors.push(`Invalid jump target "${item.target}" in section "${section.label}"`);
          }
        }
      });
    });
  }

  /**
   * Get validation result
   * @returns {Object} Object with isValid, errors, and warnings
   */
  getResult() {
    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      errorCount: this.errors.length,
      warningCount: this.warnings.length
    };
  }

  /**
   * Get all error messages
   * @returns {Array} Array of error messages
   */
  getErrors() {
    return this.errors;
  }

  /**
   * Get all warning messages
   * @returns {Array} Array of warning messages
   */
  getWarnings() {
    return this.warnings;
  }

  /**
   * Clear validation state
   */
  clear() {
    this.errors = [];
    this.warnings = [];
  }
}

export default ScriptValidator;
