// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should round the numbers and return the sum', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4); // 1 + 3 = 4
    });

    // Add more test cases for the 'SUM' operation
  });

  describe('SUBTRACT', function() {
    it('should round the numbers and return the subtraction', function() {
      assert.equal(calculateNumber('SUBTRACT', 5.9, 2.3), 4);
      assert.equal(calculateNumber('SUBTRACT', -5.9, -2.3), -4);
    });

    // Add more test cases for the 'SUBTRACT' operation
  });

  describe('DIVIDE', function() {
    it('should round the numbers and return the division', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3); // 6 / 2 = 3
    });

    it('should handle division by zero and return Error', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });

    // Add more test cases for the 'DIVIDE' operation
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
