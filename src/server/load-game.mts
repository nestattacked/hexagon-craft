import { Game } from '../game/index.mjs';
import { createGame } from '../engine/create-game.mjs';

const loadGame = () => {
  const game: Game = createGame();
  // TODO
  return game;
};

export { loadGame };
