function getStudentsByLocation(studentList, city) {
    // Use the filter function to select students in the specified city
    return studentsInCity = studentList.filter(student => student.location === city);
}

export default getStudentsByLocation;