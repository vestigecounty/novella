/**
 * CharacterRegistry.js
 * Manages character definitions and properties
 */

export class CharacterRegistry {
  constructor() {
    this.characters = new Map();
    this.aliases = new Map(); // Maps alias to full character id
    this.registerDefaultCharacters();
  }

  /**
   * Register default characters
   */
  registerDefaultCharacters() {
    this.register("Narrator", {
      name: "Narrator",
      color: "#FFFFFF",
      displayName: "Narrator",
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
      color: data.color || "#FFFFFF",
      displayName: data.displayName || data.name || id,
      image: data.image || null,
      ...data,
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
    return character ? character.color : "#FFFFFF";
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

  /**
   * Register a character with an alias
   * @param {string} fullName - Full character name
   * @param {string} alias - Character alias
   * @param {string} color - Character color
   */
  registerAlias(fullName, alias, color) {
    // Register character using alias as key
    this.register(alias, {
      name: fullName,
      color: color,
      displayName: fullName,
      alias: alias,
    });
    // Map alias to the full character id
    this.aliases.set(alias, alias);
  }

  /**
   * Resolve a character id through alias if needed
   * @param {string} id - Character id or alias
   * @returns {string} Resolved character id
   */
  resolveId(id) {
    return this.aliases.get(id) || id;
  }

  /**
   * Check if an alias exists
   * @param {string} alias - Alias to check
   * @returns {boolean}
   */
  hasAlias(alias) {
    return this.aliases.has(alias);
  }
}

export default CharacterRegistry;
