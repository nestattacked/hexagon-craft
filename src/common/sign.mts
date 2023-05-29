import { createHmac } from 'crypto';

const sign = (data: string, secret: string) => {
  const hmac = createHmac('sha256', secret);
  hmac.update(data);
  return hmac.digest('hex');
};

const isValidSignature = (body: string, signature: string, secret: string) => {
  if (secret === undefined) {
    return false;
  }
  if (sign(body, secret) !== signature) {
    return false;
  }
  return true;
};

export { sign, isValidSignature };
