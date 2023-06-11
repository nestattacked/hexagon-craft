import { Action, act } from '../action/index.mjs';
import { Game } from '../game/index.mjs';

const tick = (game: Game, actions: Action[]) => {
  actions.forEach((action) => {
    act(game, action);
  });
};

export { tick };
