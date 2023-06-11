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
import { EnterAction } from '../../action/enter.mjs';
import { LeaveAction } from '../../action/leave.mjs';

const move = () =>
  object<MoveAction>({
    type: constant(ActionType.Move),
    id: string(),
    step: vector3()
  });

const enter = () =>
  object<EnterAction>({
    type: constant(ActionType.Enter),
    id: string(),
    entity: entity()
  });

const leave = () =>
  object<LeaveAction>({
    type: constant(ActionType.Leave),
    id: string()
  });

const action = () => oneOf<Action>(move(), enter(), leave());

export { action };
