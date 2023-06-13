import { Executor } from './executor.mjs';
import { Game } from '../game/index.mjs';
import { OrderType } from './core.mjs';
import { MoveOrder, execute as executeMove } from './move.mjs';
import { StartOrder, execute as executeStart } from './start.mjs';

type Order = MoveOrder | StartOrder;

const execute = (game: Game, order: Order): Executor => {
  switch (order.type) {
    case OrderType.Move:
      return executeMove(game, order);
    case OrderType.Start:
      return executeStart(game, order);
  }
};

export { Order, execute };
