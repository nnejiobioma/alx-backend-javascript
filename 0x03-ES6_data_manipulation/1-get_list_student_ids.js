const getListStudentIds = (studentLists) => {
    let studentListsIds = [];
    if (!(studentLists instanceof Array)) {
        return studentListsIds;
    }
    studentListsIds = studentLists.map((student) => student.id);
    return studentListsIds;
};

export default getListStudentIds;