import {
  constant,
  object,
  oneOf,
  string
} from '@mojotech/json-type-validation';
import { integer, vector3 } from './common.mjs';
import { EntityType } from '../../game/entity/core.mjs';
import { Entity } from '../../game/entity/index.mjs';
import { Unit } from '../../game/entity/unit.mjs';
import { Tile } from '../../game/entity/tile.mjs';

const tile = () =>
  object<Tile>({
    id: string(),
    coord: vector3(),
    type: constant(EntityType.Tile),
    height: integer(0),
    terrain: integer(0)
  });

const unit = () =>
  object<Unit>({
    id: string(),
    coord: vector3(),
    type: constant(EntityType.Unit)
  });

const entity = () => oneOf<Entity>(tile(), unit());

export { entity };
