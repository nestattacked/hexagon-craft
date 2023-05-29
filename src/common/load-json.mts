import { Decoder } from '@mojotech/json-type-validation';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const loadJson = async <T extends object>(
  path: string,
  decoder: Decoder<T>
) => {
  const file = join(fileURLToPath(import.meta.url), path);
  const data = await readFile(file);
  const json = JSON.parse(data.toString());
  return decoder.runWithException(json);
};

export { loadJson };
