function getStudentsByLocation(studentList, city) {
    // Use the filter function to select students in the specified city
    const studentsInCity = studentList.filter(student => student.location === city);

    return studentsInCity;
}