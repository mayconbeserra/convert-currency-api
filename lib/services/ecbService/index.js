'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (api, url) {
  return {
    getExchangeRates: getRates.bind(this, api, url)
  };
};

var _xpath = require('xpath');

var _xpath2 = _interopRequireDefault(_xpath);

var _xmldom = require('xmldom');

var _xmldom2 = _interopRequireDefault(_xmldom);

var _jsonpath = require('jsonpath');

var _jsonpath2 = _interopRequireDefault(_jsonpath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dom = _xmldom2.default.DOMParser;

var getRates = function getRates(api) {
  var xml = api.get();
  var doc = new Dom().parseFromString(xml);
  // xpath.select('//Cubes');

  var data = _jsonpath2.default.query(xml, '$..cubes');
  console.log('loggin jpquery');
  console.log(data);

  return xml;
};