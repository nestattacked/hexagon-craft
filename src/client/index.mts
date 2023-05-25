import { Socket } from 'net';
import { createGame } from '../engine/create-game.mjs';
import { tick } from '../engine/tick.mjs';
import { Operation } from '../engine/operation.mjs';
import { host, port, secret } from './config.mjs';
import { decodeMessages } from '../common/decode-messages.mjs';
import { sign } from '../common/sign.mjs';
import { operation as operationDecoder } from '../common/decoder/operation.mjs';

const game = createGame();

const onOperation = (operation: Operation) => {
  tick(game, operation);
};

const onMessage = (message: string) => {
  const signature = message.slice(message.length - 64);
  const body = message.slice(0, message.length - 64);

  if (sign(body, secret) !== signature) {
    return;
  }

  const decoded = operationDecoder().run(body);
  if (!decoded.ok) {
    return;
  }

  onOperation(decoded.result);
};

let remain = '';
const onData = (data: Buffer) => {
  const result = decodeMessages(remain, data);
  remain = result.remain;
  result.messages.forEach(onMessage);
};

const client = new Socket();
client.on('data', onData);
client.connect(port, host);
