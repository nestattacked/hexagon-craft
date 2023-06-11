import { ActionType } from '../action/core.mjs';
import { Vector3, sum } from '../common/vector3.mjs';
import { EntityType } from '../game/entity/core.mjs';
import { Game, getEntityByCoord, getEntityById } from '../game/index.mjs';
import { Core, OrderType } from './core.mjs';
import { Executor } from './executor.mjs';

interface MoveOrder extends Core {
  type: OrderType.Move;
  id: string;
  steps: Vector3[];
}

function* executor(game: Game, order: MoveOrder): Executor {
  const unit = getEntityById(game, order.id, EntityType.Unit);

  if (unit === undefined || unit.owner !== order.commander) {
    return;
  }

  if (!order.steps.every(isSingleStep)) {
    return;
  }

  for (const step of order.steps) {
    const coord = sum(unit.coord, step);
    const tile = getEntityByCoord(game, coord, EntityType.Tile);
    if (tile === undefined) {
      return;
    } else {
      yield [
        {
          type: ActionType.Move,
          id: order.id,
          step
        }
      ];
    }
  }
}

const isSingleStep = (step: Vector3) => {
  return step.q * step.q + step.r * step.r + step.s * step.s === 2;
};

export { MoveOrder, executor };
