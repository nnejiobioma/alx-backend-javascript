// Define a function named getStudentsByLocation
function getStudentsByLocation(students, city) {
    // Use the filter method to create a new array
    // Filter the students based on their location
    const filteredStudents = students.filter((student) => {
        // Check if the student's location matches the specified city
        return student.location === city;
    });

    // Return the filtered array of students
    return filteredStudents;
}

// Export the getStudentsByLocation function as the default export
export default getStudentsByLocation;


//export default (students, city) => students.filter(student => student.location === city);


// function getStudentsByLocation(studentList, city) {
//     // Use the filter function to select students in the specified city
//     return studentsInCity = studentList.filter(student => student.location === city);
// }

// export default getStudentsByLocation;