import { Executor } from './executor.mjs';
import { Game } from '../game/index.mjs';
import { OrderType } from './core.mjs';
import { MoveOrder, executor as moveExecutor } from './move.mjs';
import { StartOrder, executor as startExecutor } from './start.mjs';

type Order = MoveOrder | StartOrder;

const executor = (game: Game, order: Order): Executor => {
  switch (order.type) {
    case OrderType.Move:
      return moveExecutor(game, order);
    case OrderType.Start:
      return startExecutor(game, order);
  }
};

export { Order, executor };
