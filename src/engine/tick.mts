import { Game } from '../game/index.mjs';
import { Operation } from '../order/operation.mjs';
import { act } from './act.mjs';

const tick = (game: Game, operation: Operation) => {
  game.operations.push(operation);
  operation.actionsList.forEach((actions) => {
    actions.forEach((action) => act(game, action));
  });
};

export { tick };
