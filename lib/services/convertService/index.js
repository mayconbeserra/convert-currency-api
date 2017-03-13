'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ecbService) {
  return {
    convert: convert.bind(this, ecbService)
  };
};

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var convert = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ecbService, payload) {
    var converted;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = payload.value;
            _context.next = 3;
            return getRate(ecbService.service, payload);

          case 3:
            _context.t1 = _context.sent;
            converted = _context.t0 * _context.t1;
            return _context.abrupt('return', {
              from: payload.from,
              to: payload.to,
              original: payload.value,
              converted: converted
            });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function convert(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getRate = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ecbService, payload) {
    var rateBase, rates, rateFrom, rateTo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rateBase = 1;
            _context2.next = 3;
            return ecbService.getExchangeRates();

          case 3:
            rates = _context2.sent;

            if (!(payload.from === 'EUR')) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt('return', getRateTo(rates, payload.to));

          case 6:
            if (!(payload.to === 'EUR')) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', rateBase / getRateFrom(rates, payload.from));

          case 8:
            rateFrom = getRateFrom(rates, payload.from);
            rateTo = getRateTo(rates, payload.to);
            return _context2.abrupt('return', rateTo * (rateBase / rateFrom));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getRate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getRateFrom = function getRateFrom(rates, from) {
  return rates.find(function (el) {
    return el.currency === from;
  }).rate;
};
var getRateTo = function getRateTo(rates, to) {
  return rates.find(function (el) {
    return el.currency === to;
  }).rate;
};