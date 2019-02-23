'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _tests = require('./tests');

console.log('HELLO');

Object.keys(_tests).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tests[key];
    }
  });
});
