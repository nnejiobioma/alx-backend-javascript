// Define a function named getStudentIdsSum
export default function getStudentIdsSum(students) {
    // Initialize a variable to hold the sum of student IDs
    let sumOfIds = 0;

    // Use the reduce method to iterate over the students array
    sumOfIds = students.reduce((accumulator, student) => {
        // Add the ID of the current student to the accumulator
        const idToAdd = student.id;
        const updatedSum = accumulator + idToAdd;

        // Return the updated accumulator
        return updatedSum;
    }, sumOfIds); // Initialize reduce with the sumOfIds variable

    // Return the final sum of student IDs
    return sumOfIds;
}