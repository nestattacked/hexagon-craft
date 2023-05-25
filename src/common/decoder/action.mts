import {
  constant,
  object,
  oneOf,
  string
} from '@mojotech/json-type-validation';
import { ActionType } from '../../action/core.mjs';
import { vector3 } from './common.mjs';
import { entity } from './entity.mjs';
import { Action } from '../../action/index.mjs';
import { MoveAction } from '../../action/move.mjs';
import { SeeAction } from '../../action/see.mjs';
import { UnseeAction } from '../../action/unsee.mjs';

const move = () =>
  object<MoveAction>({
    type: constant(ActionType.Move),
    id: string(),
    step: vector3()
  });

const see = () =>
  object<SeeAction>({
    type: constant(ActionType.See),
    entity: entity()
  });

const unsee = () =>
  object<UnseeAction>({
    type: constant(ActionType.Unsee),
    id: string()
  });

const action = () => oneOf<Action>(move(), see(), unsee());

export { action };
