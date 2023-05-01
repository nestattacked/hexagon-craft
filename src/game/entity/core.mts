import { Vector3 } from '../../common/vector3.mjs';

enum EntityType {
  Tile,
  Unit
}

interface Core {
  id: string;
  type: EntityType;
  coord: Vector3;
}

export { Core, EntityType };
