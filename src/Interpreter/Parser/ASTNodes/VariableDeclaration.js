import { ASTNode } from './ASTNode';

export class VariableDeclaration extends ASTNode {
  constructor(variable, type) {
    super();

    this.variable = variable;
    this.type = type;
  }

  valueOf() {
    return this.name;
  }

  get from() {
    return this.variable.from;
  }

  get to() {
    return this.variable.to;
  }
};
