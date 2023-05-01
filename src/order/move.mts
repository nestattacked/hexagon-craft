import { Vector3 } from '../common/vector3.mjs';
import { Game } from '../game/index.mjs';
import { Core, OrderType } from './core.mjs';
import { Operation } from './operation.mjs';

interface MoveOrder extends Core {
  type: OrderType.Move;
  id: string;
  steps: Vector3[];
}

const test = (game: Game, order: MoveOrder): boolean => {
  return true;
};

const parse = (game: Game, order: MoveOrder, viewer: number): Operation => {
  return {
    index: 0,
    actionsList: []
  };
};

export { MoveOrder, test, parse };
