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
// const basicOp = (op, n1, n2) => eval(n1 + op + n2)
// console.log(basicOp('+', 4, 7), 11);
// console.log(basicOp('-', 15, 18), -3);
// console.log(basicOp('*', 5, 5), 25);
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
// const greet = (name) => `Hello, ${name} how are you doing today?`
// console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
// console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");
// Most common solution:
// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }
//
// 8kyu - Convert a Boolean to a String
// function booleanToString(b){
//     //your code here
// }
// const booleanToString = (b) => b ? "true" : "false"
// console.log(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// console.log(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
// Common solution:
// function booleanToString(b){
//     return b.toString();
// }
//
// 8kyu - Convert number to reversed array of digits
// function digitize(n) {
//     //code here
// }
// const digitize = (n) => { 
//     const str = String(n);
//     const arr = str.split('');
//     arr.reverse();
//     return arr.map(num => Number(num))
// }
// console.log(digitize(35231),[1,3,2,5,3]);
// console.log(digitize(0),[0]);
// Two other solutions:
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }
// and:
// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
// }
//
// 8kyu - Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled
// function maps(x){

// }{
// const maps = (x) => x.map(function(el) { return el*2; });
// console.log(maps([1, 2, 3]), [2, 4, 6]);
// console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
// Best solution:
// function maps(x){
//     return x.map(n => n * 2);
// }
// Or this shortened solution:
// maps = x => x.map(e => e * 2);
//
// 8kyu - You Can't Code Under Pressure #1
// Double the given integer and return it
// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i*2;
// }
// const doubleInteger = (i) => i*2;
//
// 8kyu Abbreviate a Two Word Name
// function abbrevName(name){

//     // code away

// }
// const abbrevName = (name) => name.split(" ").map((init) => init[0].toUpperCase()).join(".");
// Other solution with regex:
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
//
// 8kyu A Needle in the Haystack
// take array of junk and find index of needle
// function findNeedle(haystack) {
//     // your code here
// }
const findNeedle = (haystack) => 'found the needle at position ' + haystack.indexOf("needle");
// Popular Solution:
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }