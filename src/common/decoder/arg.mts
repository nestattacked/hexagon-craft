import { array, object, string } from '@mojotech/json-type-validation';
import { integer } from './common.mjs';
import { entity } from './entity.mjs';

const port = () => integer(0);

const serverConfig = () =>
  object({
    port: port(),
    secrets: array(string())
  });

const clientConfig = () =>
  object({
    host: string(),
    port: port(),
    playerIndex: integer(0),
    secret: string()
  });

const map = () => array(entity());

const data = () => object();

export { serverConfig, clientConfig, map, data };
