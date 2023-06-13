import { Executor } from './executor.mjs';
import { Game } from '../game/index.mjs';
import { Core, OrderType } from './core.mjs';
import { Entity } from '../game/entity/index.mjs';

interface StartOrder extends Core {
  type: OrderType.Start;
  map: Entity[];
}

function* execute(game: Game, order: StartOrder): Executor {
  if (order.commander !== -1) {
    return;
  }

  game.entities = order.map;

  yield [];
}

export { StartOrder, execute };
