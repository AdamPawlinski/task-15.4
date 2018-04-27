// task 1
let a = "Hello";
let b = "World";
console.log(`${a} ${b}`);

// task 2
let multiply = (x, y = 1) => console.log(`Result of multiplying ${x} and ${y} is: ${(x * y)}`);
multiply(5, 3);

// task 3
let average = (...params) => {
  let averageResult = (params.reduce((prev, next) => (prev += next))/params.length);
  console.log(`Average of ${params} equals: ${averageResult}`);
};
average(1,2,3);

// task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstName,, lastName,] = array;
console.log(`The first and last name from array are: ${firstName} ${lastName}`);
