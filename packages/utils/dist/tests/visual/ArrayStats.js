"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayStats = function ArrayStats(_ref) {
  var items = _ref.items;
  return items ? _react.default.createElement("div", null, "Items: ", items.length) : _react.default.createElement("div", null, "No Items");
};

ArrayStats.propTypes = {
  items: _propTypes.default.array
};
var _default = ArrayStats;
exports.default = _default;