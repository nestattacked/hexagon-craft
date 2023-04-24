import { Vector3 } from '../common/vector3.mjs';

enum EntityType {
  Tile,
  Unit
}

interface Core extends Vector3 {
  id: string;
  type: EntityType;
}

export { Core, EntityType };
