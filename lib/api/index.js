'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convert = require('./convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRoute = function wrapRoute(fn) {
  return function () {
    return fn.apply(undefined, arguments).catch(arguments.length <= 2 ? undefined : arguments[2]);
  };
};

exports.default = function (app) {
  app.get('/api/v1/convert', wrapRoute(_convert2.default));
  app.get('/_ping', function (req, res) {
    res.status(200).end();
  });

  app.use(function (req, res) {
    res.status(404).end();
  });
};