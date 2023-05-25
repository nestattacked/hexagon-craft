import { createHmac } from 'crypto';
import { secrets } from '../server/config.mjs';

const sign = (data: string, secret: string) => {
  const hmac = createHmac('sha256', secret);
  hmac.update(data);
  return hmac.digest('hex');
};

const isValidSignature = (
  body: string,
  signature: string,
  playerIndex: number
) => {
  const secret = secrets[playerIndex];
  if (secret === undefined) {
    return false;
  }
  if (sign(body, secret) !== signature) {
    return false;
  }
  return true;
};

export { sign, isValidSignature };
