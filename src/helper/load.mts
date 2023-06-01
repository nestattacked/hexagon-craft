import { createGame } from '../engine/create-game.mjs';
import { parseArgs } from 'util';
import { loadJson } from '../common/load-json.mjs';
import {
  data as dataDecoder,
  clientConfig as clientConfigDecoder
} from '../common/decoder/arg.mjs';

const load = async () => {
  const { config, data } = await parse();
  const game = createGame();
  return { config, game, data };
};

const parse = async () => {
  const { values } = parseArgs({
    options: {
      configuration: {
        type: 'string'
      },
      data: {
        type: 'string'
      }
    }
  });

  if (values.configuration === undefined || values.data === undefined) {
    throw Error('invalid args');
  }

  const config = await loadJson(values.configuration, clientConfigDecoder());
  const data = await loadJson(values.data, dataDecoder());

  return { config, data };
};

export { load };
