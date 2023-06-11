import { Entity } from '../game/entity/index.mjs';
import { Game } from '../game/index.mjs';
import { ActionType, Core } from './core.mjs';

interface EnterAction extends Core {
  type: ActionType.Enter;
  entity: Entity;
}

const act = (game: Game, action: EnterAction) => {
  game.entities.push({ ...action.entity });
};

export { EnterAction, act };
