import { createGame } from '../engine/create-game.mjs';
import { parseArgs } from 'util';
import { loadJson } from '../common/load-json.mjs';
import {
  data as dataDecoder,
  script as scriptDecoder
} from '../common/decoder/arg.mjs';

const load = async () => {
  const { data, script } = await parse();
  const game = createGame();
  return { game, data, script };
};

const parse = async () => {
  const { values } = parseArgs({
    options: {
      data: {
        type: 'string'
      },
      script: {
        type: 'string'
      }
    }
  });

  if (values.data === undefined || values.script === undefined) {
    throw Error('invalid args');
  }

  const data = await loadJson(values.data, dataDecoder());
  const script = await loadJson(values.script, scriptDecoder());

  return { data, script };
};

export { load };
