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
  var rateBase = 1;
  var rates = api.getExchangeRates();
  var from = rates.find(function (element) {
    return element.currency === payload.from;
  });
  var to = rates.find(function (element) {
    return element.currency === payload.to;
  });

  var toRate = to === undefined ? parseFloat(1 / from.rate) : to.rate;
  var convertedValue = parseFloat(payload.value) * toRate;

  var test = payload.value * getRate(api, payload);
  console.log('result');
  console.log(test);

  return {
    from: payload.from,
    to: payload.to,
    original: payload.value,
    converted: test
  };

  // return {
  //   from: (from ? from.currency : 'EUR'),
  //   to: (to ? to.currency : 'EUR'),
  //   original: payload.value,
  //   converted: convertedValue,
  // };
};

var getRate = function getRate(api, payload) {
  var rateBase = 1;
  var rates = api.getExchangeRates();

  if (payload.from === 'EUR') {
    return rates.find(function (el) {
      return el.currency === payload.to;
    }).rate;
  }

  if (payload.to === 'EUR') {
    return rateBase / rates.find(function (el) {
      return el.currency === payload.from;
    }).rate;
  }

  var rateFrom = rates.find(function (el) {
    return el.currency === payload.from;
  }).rate;
  var rateTo = rates.find(function (el) {
    return el.currency === payload.to;
  }).rate;

  // console.log('rateFrom');
  // console.log(rateFrom);
  // console.log('rateto');
  // console.log(rateTo);
  return rateTo * (rateBase / rateFrom);
};