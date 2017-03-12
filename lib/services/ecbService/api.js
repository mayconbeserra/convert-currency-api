'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    get: get.bind(this)
  };
};

var get = function get() {
  console.log('get');
}; // import request from 'superagent';