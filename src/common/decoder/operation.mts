import { array, object } from '@mojotech/json-type-validation';
import { integer } from './common.mjs';
import { action } from './action.mjs';

const operation = () =>
  object({
    index: integer(0),
    actionsList: array(array(action()))
  });

export { operation };
