import { Unit } from '../entity/unit.mjs';
import { Entity } from '../entity/index.mjs';
import { Vector3 } from '../common/vector3.mjs';
import { ActionType, Core } from './core.mjs';
import { World } from '../engine/world.mjs';
import { takeSteps } from './common.mjs';

enum EmergeType {
  Regular,
  Intrude
}

interface EmergeCore extends Core {
  type: ActionType.Emerge;
  emergeType: EmergeType;
  entity: Entity;
}

interface Regular extends EmergeCore {
  emergeType: EmergeType.Regular;
}

interface Intrude extends EmergeCore {
  emergeType: EmergeType.Intrude;
  entity: Unit;
  steps: Vector3[];
}

type Emerge = Regular | Intrude;

const merge = (world: World, action: Emerge) => {
  switch (action.emergeType) {
    case EmergeType.Regular:
      regular(world, action);
      break;
    case EmergeType.Intrude:
      intrude(world, action);
      break;
  }
};

const regular = (world: World, action: Regular) => {
  world.entities.push(action.entity);
};

const intrude = (world: World, action: Intrude) => {
  takeSteps(action.entity, action.steps);
  world.entities.push(action.entity);
};

export { Emerge, EmergeType, merge };
