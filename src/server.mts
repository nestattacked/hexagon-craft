import { World } from './engine/world.mjs';
import { Event } from './engine/event.mjs';
import { tick } from './engine/tick.mjs';
import { ActionType } from './action/core.mjs';
import { EmergeType } from './action/emerge.mjs';
import { EntityType } from './entity/core.mjs';
import { Terrain } from './entity/tile.mjs';

const world: World = {
  entities: []
};

const event0: Event = {
  index: 0,
  actions: [
    {
      type: ActionType.Emerge,
      emergeType: EmergeType.Regular,
      entity: {
        type: EntityType.Tile,
        id: 't0',
        q: 0,
        r: 0,
        s: 0,
        height: 0,
        terrain: Terrain.Plain
      }
    },
    {
      type: ActionType.Emerge,
      emergeType: EmergeType.Regular,
      entity: {
        type: EntityType.Tile,
        id: 't1',
        q: 1,
        r: 0,
        s: -1,
        height: 0,
        terrain: Terrain.Plain
      }
    },
    {
      type: ActionType.Emerge,
      emergeType: EmergeType.Regular,
      entity: {
        type: EntityType.Unit,
        id: 'u0',
        q: 0,
        r: 0,
        s: 0
      }
    }
  ]
};

const event1: Event = {
  index: 1,
  actions: [
    {
      type: ActionType.Move,
      id: 'u0',
      steps: [
        {
          q: 1,
          r: 0,
          s: -1
        }
      ]
    }
  ]
};

tick(world, event0);
tick(world, event1);
