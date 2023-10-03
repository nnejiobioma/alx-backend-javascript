export default function updateStudentGradeByCity(
    students,
    city,
    newGrades,
) {
    const updatedStudents = students
        .filter((student) => student.location === city)
        .map((student) => {
            const gradeInfo = newGrades.find((gradeInfo) => gradeInfo.studentId === student.id);
            student.grade = gradeInfo ? gradeInfo.grade : 'N/A';
            return student;
        });

    return updatedStudents;
}