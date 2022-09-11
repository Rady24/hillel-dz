const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }   
]

function getAverage (marksArr){
    const marksSum = marksArr.reduce((acc,item) => acc+item);
    const averageMark = marksSum / marksArr.length
    return averageMark;
}

function calculateStudentAverageMark(id){
    const studentMarks = students[id].marks;
    return getAverage (studentMarks);
}

function calculateGroupAverageMark(students){

    
    let newArrayMarks = [];
    for (let i = 0; i<students.length; i++){
        newArrayMarks = newArrayMarks.concat(students[i].marks);
    }

    return getAverage (newArrayMarks);
}





