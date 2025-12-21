/**
 * CommandParser.js
 * Parses custom commands in visual novel scripts
 */

export class CommandParser {
  constructor() {
    this.commands = {};
  }

  /**
   * Parse a command string
   * @param {string} commandString - Raw command string
   * @returns {Object} Parsed command object
   */
  parseCommand(commandString) {
    const trimmed = commandString.trim();

    // Match command pattern: @command arg1 arg2 ...
    const match = trimmed.match(/^@(\w+)\s*(.*)?$/);

    if (!match) {
      return null;
    }

    const [, commandName, argsString] = match;
    const args = argsString ? argsString.split(/\s+/) : [];

    return {
      type: 'command',
      name: commandName,
      args: args
    };
  }

  /**
   * Register a custom command handler
   * @param {string} name - Command name
   * @param {Function} handler - Command handler function
   */
  registerCommand(name, handler) {
    this.commands[name] = handler;
  }

  /**
   * Execute a command
   * @param {Object} command - Parsed command object
   * @param {Object} context - Execution context (state, etc.)
   * @returns {*} Command result
   */
  executeCommand(command, context) {
    const handler = this.commands[command.name];

    if (!handler) {
      console.warn(`Unknown command: ${command.name}`);
      return null;
    }

    return handler(command.args, context);
  }

  /**
   * Check if a string is a command
   * @param {string} str - String to check
   * @returns {boolean}
   */
  isCommand(str) {
    return str.trim().startsWith('@');
  }
}

export default CommandParser;
