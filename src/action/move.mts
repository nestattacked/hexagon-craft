import { Vector3 } from '../common/vector3.mjs';
import { World, getEntityById } from '../engine/world.mjs';
import { takeSteps } from './common.mjs';
import { ActionType, Core } from './core.mjs';

interface Move extends Core {
  type: ActionType.Move;
  id: string;
  steps: Vector3[];
}

const move = (world: World, action: Move) => {
  const entity = getEntityById(world, action.id);

  if (entity === undefined) {
    return;
  }

  takeSteps(entity, action.steps);
};

export { Move, move };
