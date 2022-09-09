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

function calculateStudentAverageMark(id){
    const marksSum = students[id].marks.reduce((acc,item) => acc+item);
    const averageMark = marksSum / students[id].marks.length; 
    return averageMark;
}

function calculateGroupAverageMark(students){
    const newArrayMarks = [].concat(students[0].marks,students[1].marks,students[2].marks,students[3].marks)
    const newArrayMarksSum = newArrayMarks.reduce((acc,item) => acc+item);
    const newArrayMarksAverage = newArrayMarksSum / newArrayMarks.length;
   
    return newArrayMarksAverage;
}




