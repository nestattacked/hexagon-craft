import { Game } from '../game/index.mjs';

const loadGame = (): Game => {
  return { operations: [], entities: [] };
};

export { loadGame };
