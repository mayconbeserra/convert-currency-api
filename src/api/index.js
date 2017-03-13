import convert from './convert';

const wrapRoute = fn => (...args) => fn(...args).catch(args[2]);

export default (app) => {
  app.get('/api/v1/convert', wrapRoute(convert));
  app.get('/_ping', (req, res) => {
    res.status(200).end();
  });

  app.use((req, res) => {
    res.status(404).end();
  });
};
