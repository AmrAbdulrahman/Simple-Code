import { ASTNode } from './ASTNode';

export class ProcedureInvokation extends ASTNode {
  constructor(id, args) {
    super();

    this.id = id;
    this.args = args;
  }

  valueOf() {
    return `<${this.name} (name=${this.id.value})>`;
  }
}
