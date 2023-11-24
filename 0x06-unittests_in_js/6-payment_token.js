function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Returning a promise that never resolves for failure case
    return new Promise(() => {});
  }
}

module.exports = getPaymentTokenFromAPI;
