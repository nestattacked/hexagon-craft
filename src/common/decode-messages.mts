interface Result {
  remain: string;
  messages: string[];
}

const decodeMessages = (remain: string, data: Buffer): Result => {
  const string = remain + data.toString('utf8');
  const parts = string.split('\n');
  const lastPart = parts[parts.length - 1];
  const messages = parts.slice(0, parts.length - 1);

  return {
    remain: lastPart,
    messages
  };
};

export { decodeMessages };
