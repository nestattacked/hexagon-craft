import { ActionType } from '../action/core.mjs';
import { Action } from '../action/index.mjs';
import { act as actMove } from '../action/move.mjs';
import { act as actSee } from '../action/see.mjs';
import { act as actUnsee } from '../action/unsee.mjs';
import { Game } from '../game/index.mjs';

const act = (game: Game, action: Action) => {
  switch (action.type) {
    case ActionType.Move:
      actMove(game, action);
      break;
    case ActionType.See:
      actSee(game, action);
      break;
    case ActionType.Unsee:
      actUnsee(game, action);
      break;
  }
};

export { act };
