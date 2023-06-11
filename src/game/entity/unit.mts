import { Vector3 } from '../../common/vector3.mjs';
import { Core, EntityType } from './core.mjs';

interface Unit extends Core {
  type: EntityType.Unit;
  owner: number;
  direction: Vector3;
}

export { Unit };
