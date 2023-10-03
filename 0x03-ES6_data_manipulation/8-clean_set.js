export default function cleanSet(inputSet, startString) {
    // Check if the inputSet is not a Set or startString is not a string
    if (!(inputSet instanceof Set) || typeof startString !== 'string') {
        return '';
    }

    const parts = [];

    // Iterate through the values of the Set
    for (const value of inputSet.values()) {
        // Check if the value is a string and starts with the specified startString
        if (typeof value === 'string' && value.startsWith(startString)) {
            // Extract the substring after startString
            const valueSubStr = value.substring(startString.length);

            // Check if there is a non-empty substring to add
            if (valueSubStr) {
                parts.push(valueSubStr);
            }
        }
    }

    // Join the parts with a hyphen and return the result
    return parts.join('-');
}