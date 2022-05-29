
let numberStudents = function () {  // функция ввода числа студентов
    let number;
    let cacheIsNan;
    do {
        number = +prompt('How many students to add to the list?');
        cacheIsNan = isNaN(number);
        console.log(`Number of students ${number}`);
    } while (cacheIsNan);

    return number;
}

function randomStudentList(manyStudents) {  //рандомный список студентов
    let randomStudentsList = studentsMock.getStudentList(manyStudents);

    return randomStudentsList;
}

const students = randomStudentList(numberStudents());
console.log(students);

//-------------------------Трансформация в массив имен-------------------------------------

const names = students.reduce((result, user) => {
    result.push(user.name);
    return result;
}, []);

console.log(names);

//Вариант с испоьзованием map

const namesOptionTwo = students.map((user) => user.name);
console.log(namesOptionTwo);


//------------------------Средняя оценка студентов------------------------------------------

function findGroupAverage(studentsList) {
    let avrStudent;
    let groupAverage;

    avrStudent = studentsList.map((user) => user.marks.reduce((sum, mark) => sum + mark, 0) / user.marks.length);  //средняя оценка по студентам
    console.log(avrStudent);

    groupAverage = Math.round(avrStudent.reduce((result, avr) => result + avr, 0) / avrStudent.length);

    return groupAverage;
}

const avgGroupMark = findGroupAverage(students);
console.log(avgGroupMark);

//---------------------------------------------------------------------------------------------------