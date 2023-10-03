// Define a function named hasValuesFromArray
export default function hasValuesFromArray(setToCheck, arrayToCheck) {
    // Check if setToCheck is not an instance of Set
    if (!(setToCheck instanceof Set)) {
        throw new TypeError('The first argument must be a Set.');
    }

    // Use the every method to check if all values in the arrayToCheck exist in setToCheck
    const allValuesExist = arrayToCheck.every((value) => setToCheck.has(value));

    // Return a boolean indicating whether all values exist in the set
    return allValuesExist;
}

// Example usage:
const mySet = new Set([1, 2, 3, 4, 5]);
const myArray = [2, 4, 6];

try {
    const result = hasValuesFromArray(mySet, myArray);
    console.log(result); // Prints false since not all values in the array exist in the set
} catch (error) {
    console.error(error.message); // Handle potential errors
}