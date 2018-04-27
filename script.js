// task 1
let a = "Hello";
let b = "World";
console.log(`${a} ${b}`);

// task 2
let multiply = (x, y = 1) => console.log(x * y);
multiply(5, 2);

// task 3
// let average = (...params) =>
// params.forEach(param => {
//     let sum = 0;
//     sum += param;
//   }) => console.log(sum/params.length);
// console.log(average(1, 2, 3));

// task 4


// task 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstName,, lastName,] = array;
console.log(firstName, lastName);
