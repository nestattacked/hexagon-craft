import { Socket, createServer } from 'net';
import { load } from './load.mjs';
import { tick } from '../engine/tick.mjs';
import { Order, test, parse } from '../order/index.mjs';
import { port, secrets } from './config.mjs';
import { decodeMessages } from '../common/decode-messages.mjs';
import { order as orderDecoder } from '../common/decoder/order.mjs';
import { isValidSignature } from '../common/sign.mjs';
import { integer } from '../common/decoder/common.mjs';
import { encodeMessage } from '../common/encode-message.mjs';
import { OrderType } from '../order/core.mjs';

const { game } = load();
const sockets: (Socket | undefined)[] = secrets.map(() => undefined);

const onOrder = (order: Order) => {
  if (!test(game, order)) {
    return;
  }

  sockets.forEach((socket, playerIndex) => {
    if (socket === undefined) {
      return;
    }
    const operation = parse(game, order, playerIndex);
    if (operation.actionsList.length === 0) {
      return;
    }
    socket.write(
      encodeMessage(JSON.stringify(operation), secrets[playerIndex])
    );
  });

  const operation = parse(game, order, -1);
  tick(game, operation);
};

const onMessage = (message: string, socket: Socket) => {
  const signature = message.slice(message.length - 64);
  const body = message.slice(0, message.length - 64);

  if (!sockets.includes(socket)) {
    const decoded = integer(0).run(body);
    if (!decoded.ok) {
      return;
    }
    const playerIndex = decoded.result;
    if (
      isValidSignature(body, signature, playerIndex) &&
      sockets[playerIndex] === undefined
    ) {
      sockets[playerIndex] = socket;
      if (sockets.every((socket) => socket !== undefined)) {
        onOrder({
          type: OrderType.Start,
          commander: -1
        });
      }
    }
    return;
  }

  const decoded = orderDecoder().run(body);
  if (!decoded.ok) {
    return;
  }
  if (!isValidSignature(body, signature, decoded.result.commander)) {
    return;
  }

  onOrder(decoded.result);
};

const server = createServer((socket) => {
  let remain = '';

  const onData = (data: Buffer) => {
    const result = decodeMessages(remain, data);
    remain = result.remain;
    result.messages.forEach((message) => onMessage(message, socket));
  };

  socket.on('data', onData);
});

server.listen(port);
