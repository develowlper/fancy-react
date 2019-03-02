const { useState } = require('../src/index');

test('should export useState', () => {
  expect(typeof useState).toBe('function');
});
