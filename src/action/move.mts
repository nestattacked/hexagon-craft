import { Vector3, sum } from '../common/vector3.mjs';
import { Game, getEntityById } from '../game/index.mjs';
import { EntityType } from '../game/entity/core.mjs';
import { ActionType, Core } from './core.mjs';

interface MoveAction extends Core {
  type: ActionType.Move;
  id: string;
  step: Vector3;
}

const act = (game: Game, action: MoveAction) => {
  const unit = getEntityById(game, action.id, EntityType.Unit);

  if (unit === undefined) {
    return;
  }

  unit.coord = sum(unit.coord, action.step);
};

export { MoveAction, act };
