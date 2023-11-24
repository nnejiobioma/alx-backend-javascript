const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct data when success is true', function(done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the promise is resolved with the correct data
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        // Call done to signal the end of the async test
        done();
      })
      .catch((error) => {
        // Call done with the error if the promise is rejected
        done(error);
      });
  });

  it.skip('should return a rejected promise when success is false', function(done) {
    // Call the function with success = false
    getPaymentTokenFromAPI(false)
      .then(() => {
        // The promise should not resolve, so the test should not reach here
        done(new Error('Promise should have been rejected'));
      })
      .catch((error) => {
        // Assert that the promise is rejected with the correct error message
        expect(error).to.equal('Error');
        // Call done to signal the end of the async test
        done();
      });
  });
});
