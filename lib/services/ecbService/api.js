'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = api;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function api(url) {
  return {
    get: get.bind(this, url)
  };
}

var get = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url) {
    var result, data, parser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;
            _context.next = 3;
            return _superagent2.default.get(url);

          case 3:
            data = _context.sent;
            parser = new _xml2js2.default.Parser();

            parser.parseString(data.text, function (er, res) {
              result = JSON.stringify(res);
            });
            return _context.abrupt('return', result);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();