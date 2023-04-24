import { Entity } from '../entity/index.mjs';

interface World {
  entities: Entity[];
}

const getEntityById = (world: World, id: string) => {
  return world.entities.find((entity) => entity.id === id);
};

export { World, getEntityById };
