import { Game } from '../game/index.mjs';
import { ActionType, Core } from './core.mjs';

interface LeaveAction extends Core {
  type: ActionType.Leave;
}

const act = (game: Game, action: LeaveAction) => {
  game.entities = game.entities.filter((entity) => entity.id !== action.id);
};

export { LeaveAction, act };
