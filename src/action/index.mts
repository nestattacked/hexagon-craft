import { Game } from '../game/index.mjs';
import { ActionType } from './core.mjs';
import { MoveAction, act as actMove } from './move.mjs';
import { EnterAction, act as actEnter } from './enter.mjs';
import { LeaveAction, act as actLeave } from './leave.mjs';

type Action = MoveAction | EnterAction | LeaveAction;

const act = (game: Game, action: Action) => {
  switch (action.type) {
    case ActionType.Move:
      actMove(game, action);
      break;
    case ActionType.Enter:
      actEnter(game, action);
      break;
    case ActionType.Leave:
      actLeave(game, action);
      break;
  }
};

export { Action, act };
