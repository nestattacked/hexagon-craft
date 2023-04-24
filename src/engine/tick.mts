import { World } from './world.mjs';
import { Event } from './event.mjs';
import { ActionType } from '../action/core.mjs';
import { Action } from '../action/index.mjs';
import { move } from '../action/move.mjs';
import { merge } from '../action/emerge.mjs';

const act = (world: World, action: Action) => {
  switch (action.type) {
    case ActionType.Move:
      move(world, action);
      break;
    case ActionType.Emerge:
      merge(world, action);
      break;
  }
};

const tick = (world: World, event: Event) => {
  const nonEmergeActions = event.actions.filter(
    (action) => action.type !== ActionType.Emerge
  );
  const emergeActions = event.actions.filter(
    (action) => action.type === ActionType.Emerge
  );

  nonEmergeActions.forEach((action) => act(world, action));
  emergeActions.forEach((action) => act(world, action));
};

export { tick };
