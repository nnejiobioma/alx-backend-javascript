// Define a map to keep track of endpoint call counts
const endpointCallCounts = new WeakMap();

// Define the maximum allowed endpoint calls
const MAX_ENDPOINT_CALLS = 5;

// Function to query the API
export function queryAPI(endpoint) {
    let callCount = endpointCallCounts.get(endpoint) || 0;
    callCount++;

    if (callCount >= MAX_ENDPOINT_CALLS) {
        throw new Error('Endpoint load is high');
    }

    endpointCallCounts.set(endpoint, callCount);
}