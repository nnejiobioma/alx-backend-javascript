const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with type SUM and correct arguments', function() {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function that uses the spy
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy after use
    calculateNumberSpy.restore();
  });

  it('should log the correct message to the console for a valid calculation', function() {
    // Create a spy to stub the console.log method
    const consoleLogStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(50, 10);

    // Assert that console.log was called with the correct message
    expect(consoleLogStub.calledWithExactly('The total is: 60')).to.be.true;

    // Restore the console.log stub after use
    consoleLogStub.restore();
  });

  it('should handle a case where Utils.calculateNumber returns an error', function() {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns('Error');

    // Create a spy to stub the console.log method
    const consoleLogStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 0);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 0)).to.be.true;

    // Assert that console.log was called with the correct error message
    expect(consoleLogStub.calledWithExactly('The total is: Error')).to.be.true;

    // Restore the spies after use
    calculateNumberStub.restore();
    consoleLogStub.restore();
  });
});
