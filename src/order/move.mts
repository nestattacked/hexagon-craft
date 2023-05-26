import { Vector3, sum } from '../common/vector3.mjs';
import { Game, getEntityByCoord, getEntityById } from '../game/index.mjs';
import { Core, OrderType } from './core.mjs';
import { Operation } from '../engine/operation.mjs';
import { EntityType } from '../game/entity/core.mjs';
import { ActionType } from '../action/core.mjs';

interface MoveOrder extends Core {
  type: OrderType.Move;
  id: string;
  steps: Vector3[];
}

const test = (game: Game, order: MoveOrder): boolean => {
  const unit = getEntityById(game, order.id, EntityType.Unit);

  if (unit === undefined || unit.owner !== order.commander) {
    return false;
  }

  let coord = unit.coord;
  for (const step of order.steps) {
    coord = sum(coord, step);
    const tile = getEntityByCoord(game, coord, EntityType.Tile);
    if (tile === undefined) {
      return false;
    }
  }

  return true;
};

const parse = (game: Game, order: MoveOrder, viewer: number): Operation => {
  return {
    actionsList: order.steps.map((step) => [
      {
        type: ActionType.Move,
        id: order.id,
        step
      }
    ])
  };
};

export { MoveOrder, test, parse };
