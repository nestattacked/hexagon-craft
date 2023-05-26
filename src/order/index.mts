import { Game } from '../game/index.mjs';
import { OrderType } from './core.mjs';
import { MoveOrder, test as testMove, parse as parseMove } from './move.mjs';
import {
  StartOrder,
  test as testStart,
  parse as parseStart
} from './start.mjs';

type Order = MoveOrder | StartOrder;

const test = (game: Game, order: Order) => {
  switch (order.type) {
    case OrderType.Move:
      return testMove(game, order);
    case OrderType.Start:
      return testStart(game, order);
  }
};

const parse = (game: Game, order: Order, viewer: number) => {
  switch (order.type) {
    case OrderType.Move:
      return parseMove(game, order, viewer);
    case OrderType.Start:
      return parseStart(game, order, viewer);
  }
};

export { Order, test, parse };
