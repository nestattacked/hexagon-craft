import { Vector3 } from '../common/vector3.mjs';
import { Entity } from '../entity/index.mjs';

const takeStep = (entity: Entity, step: Vector3) => {
  entity.q += step.q;
  entity.r += step.r;
  entity.s += step.s;
};

const takeSteps = (entity: Entity, steps: Vector3[]) => {
  steps.forEach((step) => takeStep(entity, step));
};

export { takeStep, takeSteps };
