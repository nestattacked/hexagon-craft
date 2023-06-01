import { operation as operationDecoder } from '../common/decoder/operation.mjs';
import { tick } from '../engine/tick.mjs';
import { load } from './load.mjs';
import express from 'express';

const { config, game } = await load();

const app = express();

app.use(express.json());

app.post('/operation', (req, res) => {
  try {
    const operation = operationDecoder().runWithException(req.body);
    tick(game, operation);
    res.send({ ok: true });
  } catch (error) {
    res.send({ ok: false });
  }
});

app.listen(config.port);
