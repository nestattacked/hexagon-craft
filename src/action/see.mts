import { Entity } from '../game/entity/index.mjs';
import { Game } from '../game/index.mjs';
import { ActionType, Core } from './core.mjs';

interface SeeAction extends Core {
  type: ActionType.See;
  entity: Entity;
}

const act = (game: Game, action: SeeAction) => {
  game.entities.push({ ...action.entity });
};

export { SeeAction, act };
