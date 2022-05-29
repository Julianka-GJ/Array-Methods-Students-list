"use strict";

var numberStudents = function numberStudents() {
  // функция ввода числа студентов
  var number;
  var cacheIsNan;

  do {
    number = +prompt('How many students to add to the list?');
    cacheIsNan = isNaN(number);
    console.log("Number of students ".concat(number));
  } while (cacheIsNan);

  return number;
};

function randomStudentList(manyStudents) {
  //рандомный список студентов
  var randomStudentsList = studentsMock.getStudentList(manyStudents);
  return randomStudentsList;
}

var students = randomStudentList(numberStudents());
console.log(students); //-------------------------Трансформация в массив имен-------------------------------------

var names = students.reduce(function (result, user) {
  result.push(user.name);
  return result;
}, []);
console.log(names); //Вариант с испоьзованием map

var namesOptionTwo = students.map(function (user) {
  return user.name;
});
console.log(namesOptionTwo); //------------------------Средняя оценка студентов------------------------------------------

function findGroupAverage(studentsList) {
  var avrStudent;
  var groupAverage;
  avrStudent = studentsList.map(function (user) {
    return user.marks.reduce(function (sum, mark) {
      return sum + mark;
    }, 0) / user.marks.length;
  }); //средняя оценка по студентам

  console.log(avrStudent);
  groupAverage = Math.round(avrStudent.reduce(function (result, avr) {
    return result + avr;
  }, 0) / avrStudent.length);
  return groupAverage;
}

var avgGroupMark = findGroupAverage(students);
console.log(avgGroupMark); //---------------------------------------------------------------------------------------------------