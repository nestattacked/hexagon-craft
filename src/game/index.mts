import { Vector3, equal } from '../common/vector3.mjs';
import { EntityType } from './entity/core.mjs';
import { Entity } from './entity/index.mjs';

interface Game {
  entities: Entity[];
}

const getEntityById = <T extends EntityType, E extends Entity & { type: T }>(
  game: Game,
  id: string,
  type?: T
) => {
  return game.entities.find(
    (entity) => entity.id === id && (type === undefined || entity.type === type)
  ) as E | undefined;
};

const getEntityByCoord = <T extends EntityType, E extends Entity & { type: T }>(
  game: Game,
  coord: Vector3,
  type?: T
) => {
  return game.entities.find(
    (entity) =>
      equal(entity.coord, coord) && (type === undefined || entity.type === type)
  ) as E | undefined;
};

export { Game, getEntityById, getEntityByCoord };
