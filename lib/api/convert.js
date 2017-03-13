'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convertService = require('../services/convertService');

var _convertService2 = _interopRequireDefault(_convertService);

var _ecbService = require('../services/ecbService');

var _ecbService2 = _interopRequireDefault(_ecbService);

var _api = require('../services/ecbService/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var url, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
            _context.next = 3;
            return (0, _convertService2.default)({
              service: (0, _ecbService2.default)(new _api2.default(url))
            }).convert(req.query);

          case 3:
            data = _context.sent;
            return _context.abrupt('return', res.status(200).json(data));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function convert(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return convert;
}();