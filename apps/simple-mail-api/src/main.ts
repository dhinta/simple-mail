/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.status(403).send({ message: 'Forbidden' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to simple-mail-api!' });
});

const port = process.env.API_PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
