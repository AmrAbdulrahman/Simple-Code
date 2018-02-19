import { ASTNode } from './ASTNode';

export class UnaryOp extends ASTNode {
  constructor(token, expr) {
    super();

    this.token = this.op = token;
    this.expr = expr;
  }

  valueOf() {
    return null;
  }
};
