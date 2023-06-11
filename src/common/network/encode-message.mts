import { sign } from './sign.mjs';

const encodeMessage = (message: string, secret: string) => {
  return message + sign(message, secret) + '\n';
};

export { encodeMessage };
