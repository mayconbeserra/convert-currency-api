"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (err, req, res) {
  if (err) {
    handleError(err, res);
  }
};

var handleError = function handleError(err, res) {
  console.log(err); // eslint-disable-line
  return res.sendStatus(500);
};