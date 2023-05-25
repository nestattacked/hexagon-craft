import { EntityType } from './entity/core.mjs';
import { Entity } from './entity/index.mjs';

interface Game {
  entities: Entity[];
}

const getEntityById = (game: Game, id: string, type?: EntityType) => {
  return game.entities.find(
    (entity) => entity.id === id && (type === undefined || entity.type === type)
  );
};

export { Game, getEntityById };
