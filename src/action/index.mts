import { Game } from '../game/index.mjs';
import { ActionType } from './core.mjs';
import { MoveAction, act as actMove } from './move.mjs';
import { SeeAction, act as actSee } from './see.mjs';
import { UnseeAction, act as actUnsee } from './unsee.mjs';

type Action = MoveAction | SeeAction | UnseeAction;

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

export { Action, act };
