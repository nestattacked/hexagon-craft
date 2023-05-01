import { Operation } from '../order/operation.mjs';
import { EntityType } from './entity/core.mjs';
import { Entity } from './entity/index.mjs';

interface Game {
  operations: Operation[];
  entities: Entity[];
}

const getEntityById = (game: Game, id: string, type?: EntityType) => {
  return game.entities.find(
    (entity) => entity.id === id && (type === undefined || entity.type === type)
  );
};

export { Game, getEntityById };
