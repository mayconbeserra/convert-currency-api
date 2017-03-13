'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base;

var _jsonpath = require('jsonpath');

var _jsonpath2 = _interopRequireDefault(_jsonpath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function base(api) {
  return {
    getExchangeRates: getExchangeRates.bind(this, api)
  };
}

var getExchangeRates = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(api) {
    var xml, data, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.get();

          case 2:
            xml = _context.sent;
            _context.next = 5;
            return _jsonpath2.default.query(JSON.parse(xml), '$..Cube[*].Cube[*].Cube');

          case 5:
            data = _context.sent;
            result = data[0].map(function (el) {
              return {
                currency: el.$.currency,
                rate: el.$.rate
              };
            });
            return _context.abrupt('return', result);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getExchangeRates(_x) {
    return _ref.apply(this, arguments);
  };
}();