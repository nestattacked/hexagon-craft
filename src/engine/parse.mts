import { Game } from '../game/index.mjs';
import { OrderType } from '../order/core.mjs';
import { Order } from '../order/index.mjs';
import { parse as parseMove } from '../order/move.mjs';

const parse = (game: Game, order: Order, viewer: number) => {
  switch (order.type) {
    case OrderType.Move:
      return parseMove(game, order, viewer);
  }
};

export { parse };
