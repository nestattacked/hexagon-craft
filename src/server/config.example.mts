interface Player {
  secret: string;
}

const gameLoadPath = 'path-of-game-to-load';
const gameSavePath = 'path-of-game-to-save';
const players: Player[] = [
  {
    secret: 'a'
  },
  {
    secret: 'b'
  }
];

export { gameLoadPath, gameSavePath, players };
