import { number, object } from '@mojotech/json-type-validation';

const integer = (minimum: number) =>
  number().where((value) => {
    return Number.isInteger(value) && value >= minimum;
  }, 'expect valid integer');

const vector3 = () =>
  object({
    q: integer(-Infinity),
    r: integer(-Infinity),
    s: integer(-Infinity)
  });

export { integer, vector3 };
