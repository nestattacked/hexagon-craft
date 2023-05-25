import { Game } from '../game/index.mjs';
import { OrderType } from './core.mjs';
import { MoveOrder, test as testMove, parse as parseMove } from './move.mjs';

type Order = MoveOrder;

const test = (game: Game, order: Order) => {
  switch (order.type) {
    case OrderType.Move:
      return testMove(game, order);
  }
};

const parse = (game: Game, order: Order, viewer: number) => {
  switch (order.type) {
    case OrderType.Move:
      return parseMove(game, order, viewer);
  }
};

export { Order, test, parse };
