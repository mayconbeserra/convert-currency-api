'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (api) {
  return {
    convert: convert.bind(this, api)
  };
};

var convert = function convert(api, payload) {
  var convertedValue = payload.value * getRate(api, payload);

  return {
    from: payload.from,
    to: payload.to,
    original: payload.value,
    converted: convertedValue
  };
};

var getRate = function getRate(api, payload) {
  var rateBase = 1;
  var rates = api.getExchangeRates();

  if (payload.from === 'EUR') {
    return getRateTo(rates, payload.to);
  }

  if (payload.to === 'EUR') {
    return rateBase / getRateFrom(rates, payload.from);
  }

  var rateFrom = getRateFrom(rates, payload.from);
  var rateTo = getRateTo(rates, payload.to);

  return rateTo * (rateBase / rateFrom);
};

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