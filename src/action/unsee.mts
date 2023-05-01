import { Game } from '../game/index.mjs';
import { ActionType, Core } from './core.mjs';

interface UnseeAction extends Core {
  type: ActionType.Unsee;
  id: string;
}

const act = (game: Game, action: UnseeAction) => {
  game.entities = game.entities.filter((entity) => entity.id !== action.id);
};

export { UnseeAction, act };
