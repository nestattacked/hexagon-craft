import { array, object, string } from '@mojotech/json-type-validation';
import { integer } from './common.mjs';
import { entity } from './entity.mjs';
import { order } from './order.mjs';

const port = () => integer(0);

const serverConfig = () =>
  object({
    port: port(),
    secrets: array(string())
  });

const clientConfig = () =>
  object({
    port: port()
  });

const map = () => array(entity());

const data = () => object();

const script = () =>
  object({
    orders: array(order()),
    players: array(integer(0))
  });

export { serverConfig, clientConfig, map, data, script };
