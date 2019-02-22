"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProducts = void 0;

var _react = _interopRequireDefault(require("react"));

var _provider = require("./provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_provider.Context);

var useProducts = function useProducts() {
  var products = _react.default.useContext(_provider.Context);

  console.log(products);
  return products;
};

exports.useProducts = useProducts;