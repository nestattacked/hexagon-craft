import { Socket, createServer } from 'net';
import { load } from './load.mjs';
import { Order } from '../order/index.mjs';
import { order as orderDecoder } from '../common/decoder/order.mjs';
import { isValidSignature } from '../common/network/sign.mjs';
import { integer } from '../common/decoder/common.mjs';
import { encodeMessage } from '../common/network/encode-message.mjs';
import { OrderType } from '../order/core.mjs';
import { listenData } from '../common/network/listen-data.mjs';
import { runOrder } from '../engine/run-order.mjs';

const { config, game, map } = await load();
const sockets: (Socket | undefined)[] = config.secrets.map(() => undefined);

const onOrder = (order: Order) => {
  const players = config.secrets.map((_, index) => index);
  const operations = runOrder(game, order, players);
  sockets.forEach((socket, playerIndex) => {
    if (socket === undefined) {
      return;
    }

    const operation = operations[playerIndex];
    if (operation.steps.length === 0) {
      return;
    }

    socket.write(
      encodeMessage(JSON.stringify(operation), config.secrets[playerIndex])
    );
  });
};

const onMessage = (message: string, socket: Socket) => {
  const signature = message.slice(message.length - 64);
  const body = message.slice(0, message.length - 64);

  if (!sockets.includes(socket)) {
    const playerIndex = integer(0).runWithException(JSON.parse(body));
    if (
      isValidSignature(body, signature, config.secrets[playerIndex]) &&
      sockets[playerIndex] === undefined
    ) {
      sockets[playerIndex] = socket;
      if (sockets.every((socket) => socket !== undefined)) {
        onOrder({
          type: OrderType.Start,
          commander: -1,
          map
        });
      }
    }
    return;
  }

  const order = orderDecoder().runWithException(JSON.parse(body));
  if (!isValidSignature(body, signature, config.secrets[order.commander])) {
    return;
  }
  onOrder(order);
};

const server = createServer((socket) => {
  const onMessageWithSocket = (message: string) => onMessage(message, socket);
  const onClose = () => {
    console.log(`player ${sockets.indexOf(socket)} is disconnected`);
  };
  listenData(socket, onMessageWithSocket, onClose);
});

server.listen(config.port);
