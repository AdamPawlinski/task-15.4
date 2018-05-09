// task 1
let a = "Hello";
let b = "World";
console.log(`${a} ${b}`);

// task 2
let multiply = (x, y = 1) => x * y;
console.log(`Result of multiplying is: ${multiply(5, 3)} `);

// task 3

let average = (...params) => params.reduce((prev, next) => prev += next, 0) / params.length;
const result = average(1,2,3);
console.log(`The average equals: ${result}`);

// task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const averageGrade = average(...grades);
console.log(`Averege grade from following list 1, 5, 5, 5, 4, 3, 3, 2, 1 is: ${averageGrade}`);

// task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstName,, lastName,] = array;
console.log(`The first and last name from array are: ${firstName} ${lastName}`);
