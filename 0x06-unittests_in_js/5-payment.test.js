const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogStub;

  beforeEach(function() {
    // Create a spy to stub the console.log method
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(function() {
    // Restore the console.log stub after each test
    consoleLogStub.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', function() {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleLogStub.calledWithExactly('The total is: 120')).to.be.true;

    // Assert that console.log was only called once
    expect(consoleLogStub.calledOnce).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', function() {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleLogStub.calledWithExactly('The total is: 20')).to.be.true;

    // Assert that console.log was only called once
    expect(consoleLogStub.calledOnce).to.be.true;
  });
});
