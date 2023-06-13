import {
  array,
  constant,
  object,
  oneOf,
  string
} from '@mojotech/json-type-validation';
import { OrderType } from '../../order/core.mjs';
import { integer, vector3 } from './common.mjs';
import { MoveOrder } from '../../order/move.mjs';
import { StartOrder } from '../../order/start.mjs';
import { entity } from './entity.mjs';
import { Order } from '../../order/index.mjs';

const start = () =>
  object<StartOrder>({
    type: constant(OrderType.Start),
    commander: constant(-1),
    map: array(entity())
  });

const move = () =>
  object<MoveOrder>({
    type: constant(OrderType.Move),
    commander: integer(-1),
    id: string(),
    steps: array(vector3())
  });

const order = () => oneOf<Order>(start(), move());

export { start, order };
