import { Game } from '../game/index.mjs';
import { OrderType } from '../order/core.mjs';
import { Order } from '../order/index.mjs';
import { test as testMove } from '../order/move.mjs';

const test = (game: Game, order: Order) => {
  switch (order.type) {
    case OrderType.Move:
      return testMove(game, order);
  }
};

export { test };
