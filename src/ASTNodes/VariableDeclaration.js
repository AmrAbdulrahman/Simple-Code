const ASTNode = require('./ASTNode');

module.exports = class VariableDeclaration extends ASTNode {
  constructor(variable, type) {
    super();

    this.variable = variable;
    this.type = type;
  }

  valueOf() {
    return this.children.length;
  }
};
