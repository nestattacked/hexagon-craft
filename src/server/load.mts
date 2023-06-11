import { createGame } from '../engine/create-game.mjs';
import { parseArgs } from 'util';
import { loadJson } from '../common/load-json.mjs';
import {
  map as mapDecoder,
  data as dataDecoder,
  serverConfig as serverConfigDecoder
} from '../common/decoder/arg.mjs';

const load = async () => {
  const { config, map, data } = await parse();
  const game = createGame();
  return { config, game, map, data };
};

const parse = async () => {
  const { values } = parseArgs({
    options: {
      configuration: {
        type: 'string'
      },
      map: {
        type: 'string'
      },
      data: {
        type: 'string'
      }
    }
  });

  if (
    values.configuration === undefined ||
    values.map === undefined ||
    values.data === undefined
  ) {
    throw Error('invalid args');
  }

  const config = await loadJson(values.configuration, serverConfigDecoder());
  const map = await loadJson(values.map, mapDecoder());
  const data = await loadJson(values.data, dataDecoder());

  return { config, map, data };
};

export { load };
