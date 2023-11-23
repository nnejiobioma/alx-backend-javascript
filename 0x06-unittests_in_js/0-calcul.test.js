// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round the numbers and return the sum', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4); // 1 + 3 = 4
    assert.strictEqual(calculateNumber(5.5, 2.3), 8); // 6 + 2 = 8
    assert.strictEqual(calculateNumber(-3.1, 4.9), 2); // -3 + 5 = 2
  });
  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4); // -1 + -3 = -4
  assert.equal(calculateNumber(-1.2, 3.8), 3);
  });
  it('should handle zero correctly', function() {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
  });
  it('handles a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });
  it('handles edge cases', () => {
    assert.equal(calculateNumber(0.4, 0.6), 1);
    assert.equal(calculateNumber(0.49, 0.51), 1);
    assert.equal(calculateNumber(-0.4, -0.6), -1);
    assert.equal(calculateNumber(-0.49, -0.51), -1);
  });
  it('handles b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });
  it('handles floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
  it('handles floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
});
