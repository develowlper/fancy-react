"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Context = _react.default.createContext();

exports.Context = Context;

var Provider = function Provider(_ref) {
  var productsProp = _ref.products,
      children = _ref.children;

  var _React$useState = _react.default.useState(productsProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      products = _React$useState2[0],
      setProducts = _React$useState2[1];

  var fetchProducts =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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