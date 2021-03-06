import { WHILE, REPEAT, DO } from '../../Common/constants';
import { While } from '../ASTNodes/While';

// while_block: WHILE condition (REPEAT|DO)? statement_or_block
export function eatWhileBlock() {
  const whileToken = this.currentToken;
  this.eat(WHILE);

  const conditionNode = this.eatCondition();
  this.eatOptional(REPEAT, DO);
  const blockNode = this.eatStatementOrScopedBlock();

  return new While(whileToken, conditionNode, blockNode);
}
