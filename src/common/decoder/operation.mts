import { array, object } from '@mojotech/json-type-validation';
import { action } from './action.mjs';

const operation = () =>
  object({
    actionsList: array(array(action()))
  });

export { operation };
