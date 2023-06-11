import { sum } from '../common/vector3.mjs';
import { Entity } from '../game/entity/index.mjs';
import { Game, getEntitiesByCoord, getUnitsByOwner } from '../game/index.mjs';

type View = Entity[];

const getView = (game: Game, viewer: number): View => {
  const units = getUnitsByOwner(game, viewer);

  const coords = [];
  for (const unit of units) {
    const straightCoord = sum(unit.coord, unit.direction);
    const leftCoord = sum(straightCoord, { q: -1, r: 0, s: 1 });
    const rightCoord = sum(straightCoord, { q: 0, r: 1, s: -1 });
    coords.push({ ...unit.coord });
    coords.push(straightCoord);
    coords.push(leftCoord);
    coords.push(rightCoord);
  }

  const entities: Entity[] = [];
  for (const coord of coords) {
    const entitiesOfCoord = getEntitiesByCoord(game, coord);
    for (const entityOfCoord of entitiesOfCoord) {
      if (!entities.includes(entityOfCoord)) {
        entities.push(entityOfCoord);
      }
    }
  }

  return entities;
};

export { View, getView };
