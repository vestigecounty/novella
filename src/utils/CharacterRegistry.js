/**
 * CharacterRegistry.js
 * Manages character definitions and properties
 */

export class CharacterRegistry {
  constructor() {
    this.characters = new Map();
    this.registerDefaultCharacters();
  }

  /**
   * Register default characters
   */
  registerDefaultCharacters() {
    this.register('Narrator', {
      name: 'Narrator',
      color: '#FFFFFF',
      displayName: 'Narrator'
    });
  }

  /**
   * Register a character
   * @param {string} id - Character identifier
   * @param {Object} data - Character data
   */
  register(id, data) {
    this.characters.set(id, {
      id,
      name: data.name || id,
      color: data.color || '#FFFFFF',
      displayName: data.displayName || data.name || id,
      image: data.image || null,
      ...data
    });
  }

  /**
   * Get character by id
   * @param {string} id - Character id
   * @returns {Object|null} Character data or null
   */
  get(id) {
    return this.characters.get(id) || null;
  }

  /**
   * Get all characters
   * @returns {Map} Characters map
   */
  getAll() {
    return new Map(this.characters);
  }

  /**
   * Check if character exists
   * @param {string} id - Character id
   * @returns {boolean}
   */
  has(id) {
    return this.characters.has(id);
  }

  /**
   * Remove a character
   * @param {string} id - Character id
   */
  remove(id) {
    this.characters.delete(id);
  }

  /**
   * Clear all characters
   */
  clear() {
    this.characters.clear();
    this.registerDefaultCharacters();
  }

  /**
   * Get character names as array
   * @returns {Array} Array of character names
   */
  getNames() {
    return Array.from(this.characters.keys());
  }

  /**
   * Get character display color
   * @param {string} id - Character id
   * @returns {string} Color code
   */
  getColor(id) {
    const character = this.get(id);
    return character ? character.color : '#FFFFFF';
  }

  /**
   * Get character display name
   * @param {string} id - Character id
   * @returns {string} Display name
   */
  getDisplayName(id) {
    const character = this.get(id);
    return character ? character.displayName : id;
  }
}

export default CharacterRegistry;
