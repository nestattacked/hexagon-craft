import { loadGame } from '../engine/load-game.mjs';
import { parse } from '../engine/parse.mjs';
import { test } from '../engine/test.mjs';
import { tick } from '../engine/tick.mjs';
import { OrderType } from '../order/core.mjs';
import { Order } from '../order/index.mjs';
import { MoveOrder } from '../order/move.mjs';

const game = loadGame();

const onOrder = (order: Order) => {
  if (!test(game, order)) {
    return;
  }

  const operation = parse(game, order, -1);
  tick(game, operation);
};

const moveOrder: MoveOrder = {
  type: OrderType.Move,
  commander: 0,
  id: 'ironman',
  steps: [{ q: 2, r: -2, s: 0 }]
};

onOrder(moveOrder);
