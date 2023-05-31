import { Socket } from 'net';
import { tick } from '../engine/tick.mjs';
import { Operation } from '../engine/operation.mjs';
import { sign } from '../common/sign.mjs';
import { operation as operationDecoder } from '../common/decoder/operation.mjs';
import { load } from './load.mjs';
import { encodeMessage } from '../common/network/encode-message.mjs';
import { listenData } from '../common/network/listen-data.mjs';

const { config, game } = await load();

const onOperation = (operation: Operation) => {
  tick(game, operation);
};

const onMessage = (message: string) => {
  const signature = message.slice(message.length - 64);
  const body = message.slice(0, message.length - 64);

  if (sign(body, config.secret) !== signature) {
    return;
  }

  const operation = operationDecoder().runWithException(JSON.parse(body));
  onOperation(operation);
};

const onClose = () => {
  console.log('disconnected');
};

const onConnect = () => {
  client.write(
    encodeMessage(JSON.stringify(config.playerIndex), config.secret)
  );
};

const client = new Socket();
listenData(client, onMessage, onClose);
client.connect(config.port, config.host, onConnect);
