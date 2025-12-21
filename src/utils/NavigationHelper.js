/**
 * NavigationHelper.js
 * Utilities for script navigation, labels, and jumps
 */

export class NavigationHelper {
  constructor(ast) {
    this.ast = ast;
    this.labelIndex = new Map();
    this.buildLabelIndex();
  }

  /**
   * Build an index of all labels for quick lookup
   */
  buildLabelIndex() {
    if (!this.ast || !this.ast.sections) {
      return;
    }

    for (let i = 0; i < this.ast.sections.length; i++) {
      const section = this.ast.sections[i];
      if (section.label) {
        this.labelIndex.set(section.label, i);
      }
    }
  }

  /**
   * Get section index by label
   * @param {string} label - Section label
   * @returns {number} Section index or -1 if not found
   */
  getLabelIndex(label) {
    return this.labelIndex.has(label) ? this.labelIndex.get(label) : -1;
  }

  /**
   * Get section by label
   * @param {string} label - Section label
   * @returns {Object|null} Section object or null
   */
  getSection(label) {
    const index = this.getLabelIndex(label);
    if (index === -1) return null;
    return this.ast.sections[index];
  }

  /**
   * Get next section index
   * @param {number} currentIndex - Current section index
   * @returns {number} Next section index or -1 if at end
   */
  getNextIndex(currentIndex) {
    if (currentIndex < this.ast.sections.length - 1) {
      return currentIndex + 1;
    }
    return -1;
  }

  /**
   * Get next section
   * @param {number} currentIndex - Current section index
   * @returns {Object|null} Next section or null
   */
  getNextSection(currentIndex) {
    const nextIndex = this.getNextIndex(currentIndex);
    if (nextIndex === -1) return null;
    return this.ast.sections[nextIndex];
  }

  /**
   * Check if a label exists
   * @param {string} label - Label to check
   * @returns {boolean}
   */
  hasLabel(label) {
    return this.labelIndex.has(label);
  }

  /**
   * Get all labels
   * @returns {Array} Array of all labels
   */
  getAllLabels() {
    return Array.from(this.labelIndex.keys());
  }

  /**
   * Get label count
   * @returns {number}
   */
  getLabelCount() {
    return this.labelIndex.size;
  }

  /**
   * Validate a jump target
   * @param {string} target - Target label
   * @returns {boolean}
   */
  isValidTarget(target) {
    return this.hasLabel(target);
  }

  /**
   * Get all valid jump targets from a section
   * @param {number} sectionIndex - Section index
   * @returns {Array} Array of valid target labels
   */
  getValidTargets(sectionIndex) {
    const section = this.ast.sections[sectionIndex];
    if (!section || !section.content) return [];

    const targets = new Set();

    for (const item of section.content) {
      if (item.type === 'choice' && item.target) {
        if (this.hasLabel(item.target)) {
          targets.add(item.target);
        }
      }
    }

    return Array.from(targets);
  }

  /**
   * Get the first section (usually 'start')
   * @returns {Object|null}
   */
  getFirstSection() {
    if (this.ast.sections.length === 0) return null;
    return this.ast.sections[0];
  }

  /**
   * Get section at index
   * @param {number} index - Section index
   * @returns {Object|null}
   */
  getSectionAt(index) {
    if (index < 0 || index >= this.ast.sections.length) return null;
    return this.ast.sections[index];
  }

  /**
   * Get total section count
   * @returns {number}
   */
  getSectionCount() {
    return this.ast.sections.length;
  }

  /**
   * Update AST and rebuild index
   * @param {Object} newAst - New AST
   */
  updateAST(newAst) {
    this.ast = newAst;
    this.labelIndex.clear();
    this.buildLabelIndex();
  }
}

export default NavigationHelper;
