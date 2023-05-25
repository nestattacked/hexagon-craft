import { act } from '../action/index.mjs';
import { Game } from '../game/index.mjs';
import { Operation } from './operation.mjs';

const tick = (game: Game, operation: Operation) => {
  operation.actionsList.forEach((actions) => {
    actions.forEach((action) => act(game, action));
  });
};

export { tick };
