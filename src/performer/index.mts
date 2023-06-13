import { load } from './load.mjs';
import { runOrder } from '../engine/run-order.mjs';
import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'process';

const rl = createInterface({
  input: stdin,
  output: stdout
});

const log = (header: string, json: object) => {
  console.log(
    `=========================== ${header} ===========================`
  );
  console.log(JSON.stringify(json, null, 2));
};

const { game, script } = await load();

for (const order of script.orders) {
  await rl.question('');
  log('running order', order);
  const operations = runOrder(game, order, script.players);
  for (const player of script.players) {
    await rl.question('');
    log(`operation for ${player}`, operations[player]);
  }
}

rl.close();
