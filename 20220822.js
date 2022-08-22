// 8kyu - Keep Hydrated!
// Nathan drinks 0.5 litres of water per hour of cycling. Given the time in hours you need to return the number of litres Nathan will drink, rounded to the smallest value
// function litres(time) {
//     return 0;
// }
// const litres = (time) => parseInt((time/2))
// console.log(litres(2))
// console.log(litres(1.4))
// console.log(litres(12.3))
// Most used solution:
// function litres(time) {
//     return Math.floor(time * 0.5);
// }
//
// 8kyu - Century from Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given the year, return the centry it is in
// function century(year) {
//     // Finish this :)
//     return;
// }
// const century = (year) => Math.ceil(year *.01)
// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// common solution:
// const century = year => Math.ceil(year/100)
//
// 8kyu - Basic Mathematical Operations
// Given operation (string/char), value1, and value2, return result of the operation
// function basicOp(operation, value1, value2)
// {
//   // Code
// }
const basicOp = (op, n1, n2) => eval(n1 + op + n2)
console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
// Another solution:
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//         default: return 'Operation must be one of + - * /';
//     }
// }
//
// 8kyu - Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// function greet(name){
//     //your code here
// }
const greet = (name) => `Hello, ${name} how are you doing today?`
console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");
// Most common solution:
// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }