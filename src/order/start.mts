import { ActionType } from '../action/core.mjs';
import { Operation } from '../engine/operation.mjs';
import { Game } from '../game/index.mjs';
import { Core, OrderType } from './core.mjs';

interface StartOrder extends Core {
  type: OrderType.Start;
}

const test = (game: Game, order: StartOrder): boolean => {
  return order.commander === -1;
};

const parse = (game: Game, order: StartOrder, viewer: number): Operation => {
  if (viewer === -1) {
    return {
      actionsList: []
    };
  }

  return {
    actionsList: [
      game.entities.map((entity) => ({
        type: ActionType.See,
        entity
      }))
    ]
  };
};

export { StartOrder, test, parse };
