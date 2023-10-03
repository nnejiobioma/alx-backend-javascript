// Define a function named setFromArray
const setFromArray = (array) => {
    // Create a new Set from the given array
    const newSet = new Set(array);

    // Return the created Set
    return newSet;
};

// Export the setFromArray function as the default export
export default setFromArray;

// Example usage:
const inputArray = [1, 2, 3, 2, 4, 5];
const resultSet = setFromArray(inputArray);
console.log(resultSet);