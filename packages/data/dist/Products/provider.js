"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _api = require("./api");

var Context = _react.default.createContext();

exports.Context = Context;

var Provider = function Provider(_ref) {
  var productsProp = _ref.products,
      children = _ref.children;

  var _React$useState = _react.default.useState(productsProp),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      products = _React$useState2[0],
      setProducts = _React$useState2[1];

  var fetchProducts =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _api.get)();

            case 2:
              data = _context.sent;
              setProducts(data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchProducts() {
      return _ref2.apply(this, arguments);
    };
  }();

  _react.default.useEffect(function () {
    fetchProducts();
  }, []);

  return _react.default.createElement(Context.Provider, {
    value: products
  }, children);
};

Provider.defaultProps = {
  products: null
};
var _default = Provider;
exports.default = _default;