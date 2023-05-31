import { Socket } from 'net';
import { decodeMessages } from './decode-messages.mjs';

type OnMessage = (message: string) => void;
type OnClose = () => void;

const listenData = (socket: Socket, onMessage: OnMessage, onClose: OnClose) => {
  let remain = '';
  socket.on('data', (data) => {
    const result = decodeMessages(remain, data);
    remain = result.remain;
    result.messages.forEach((message) => {
      try {
        onMessage(message);
      } catch (error) {}
    });
  });

  socket.on('close', onClose);
  socket.on('error', () => {});
};

export { listenData };
