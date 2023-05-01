import { Core, EntityType } from './core.mjs';

interface Unit extends Core {
  type: EntityType.Unit;
}

export { Unit };
