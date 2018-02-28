import { FUNCTION, TAKES, OPENBRACE, CLOSEBRACE } from '../../constants';
import { FunctionDecl } from '../../ASTNodes/FunctionDecl';

// function_declaration : FUNCTION ID (TAKES params_list)? block
export function eatFunctionDeclaration() {
  this.eat(FUNCTION);
  const id = this.eatVariable();
  let params = [];

  if (this.currentToken.is(TAKES)) {
    this.eat(TAKES);

    let withBraces = false;

    if (this.currentToken.is(OPENBRACE)) {
      withBraces = true;
      this.eat(OPENBRACE);
    }

    params = this.eatParamsList();

    if (withBraces) {
      this.eat(CLOSEBRACE);
    }
  }

  const block = this.eatBlock();

  return new FunctionDecl(id, params, block);
}
