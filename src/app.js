import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import api from './api';

export async function application () {
  const app = express();

  app.use(bodyParser.json());
  app.use(expressValidator());
  api(app);

  return app;
}

export async function start (config) {
  try {
    const app = await application(config);

    app.listen(config.env.http.port);
    console.log(`listening on ${config.env.http.host}:${config.env.http.port}`); /* eslint no-console:0 */
  } catch (err) {
    console.log(`A critical error happened: ${err}`);
  }
}
