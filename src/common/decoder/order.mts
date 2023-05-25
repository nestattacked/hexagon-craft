import {
  array,
  constant,
  object,
  string
} from '@mojotech/json-type-validation';
import { OrderType } from '../../order/core.mjs';
import { integer, vector3 } from './common.mjs';
import { MoveOrder } from '../../order/move.mjs';

const move = () =>
  object<MoveOrder>({
    type: constant(OrderType.Move),
    commander: integer(-1),
    id: string(),
    steps: array(vector3())
  });

const order = move;

export { order };
