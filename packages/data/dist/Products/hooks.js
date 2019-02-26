"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProducts = void 0;

var _react = _interopRequireDefault(require("react"));

var _provider = require("./provider");

var useProducts = function useProducts() {
  var products = _react.default.useContext(_provider.Context);

  console.log(products);
  return products;
};

exports.useProducts = useProducts;