
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

//Вариант с использованием map

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

//-----------------------Фильтрация по диапазону----------------------------------------

let arr = [5, 3, 8, 1];

function filterRange(arrNumber, a, b) {
    return arrNumber.filter((value) => value >= a && value <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

//-------------------------Fibonacci recursion------------------------------------

function fibonacciNumber(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    else if (n === 0) {
        return 0;
    }
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(25));