import { Core, EntityType } from './core.mjs';

enum Terrain {
  Plain
}

interface Tile extends Core {
  type: EntityType.Tile;
  height: number;
  terrain: Terrain;
}

export { Tile, Terrain };
