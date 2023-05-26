import { Game } from '../game/index.mjs';
import { createGame } from '../engine/create-game.mjs';
import { readFileSync } from 'fs';
import { mapPath } from './config.mjs';
import { array } from '@mojotech/json-type-validation';
import { entity } from '../common/decoder/entity.mjs';

const load = () => {
  const game: Game = createGame();
  const map = JSON.parse(readFileSync(mapPath).toString());
  game.entities = array(entity()).runWithException(map);
  return { game };
};

export { load };
