const Scope = require('./Scope');
const BuiltinTypeSymbol = require('./Symbols/BuiltinTypeSymbol');

module.exports = class BuiltinsScope extends Scope {
  constructor() {
    super('builtins');

    this.init();
  }

  init() {
    this.insert(new BuiltinTypeSymbol('INTEGER'));
    this.insert(new BuiltinTypeSymbol('REAL'));
    this.insert(new BuiltinTypeSymbol('STRING'));
  }
};