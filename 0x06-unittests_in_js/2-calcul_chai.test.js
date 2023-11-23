const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

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
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3); // 6 / 2 = 3
    });

    it('should handle division by zero and return Error', function() {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });

    // Add more test cases for the 'DIVIDE' operation
  });

  it('should throw an error for invalid type', function() {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});
