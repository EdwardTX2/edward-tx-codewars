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
// const findNeedle = (haystack) => 'found the needle at position ' + haystack.indexOf("needle");
// Popular Solution:
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }
//
// 8kyu Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// function past(h, m, s){
//     //#Happy Coding! ^_^
// }
// const past = (h,m,s) => (1000 * s) + (1000 * 60 * m) + (1000 * 3600 * h)
// console.log(past(0,1,1),61000)
// console.log(past(1,1,1),3661000)
// console.log(past(0,0,0),0)
// Common solution:
// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
// }
//
// 8kyu Count of positives / sum of negatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// function countPositivesSumNegatives(input) {
//     // your code here
// }
// function countPositivesSumNegatives(input) {
//     let pos = 0, neg = 0;
//     if (input == null || input.length == 0) {
//         return [];
//     } else {
//         input.forEach((n) => n > 0 ? pos++ : neg += n);
//     }
//     return [pos, neg];
// }
// let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(testData));
//
// 8kyu MakeUpperCase
// Write a function which converts the input string to uppercase.
// function makeUpperCase(str) {
//     // Code here
// }
// const makeUpperCase = (str) => str.toUpperCase();
//
// 8kyu invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// function invert(array) {
//     return ;
// }
// function invert(array) {
//     let arr = array.map(function(num) {
//         if (num > 0) {
//             return -num;
//         } else {
//             return Math.abs(num);
//         }
//     })
//     return arr;
// }
// better solution:
// const invert = array => array.map(num => -num);
//
// 8kyu Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// function paperwork(n, m) {
//   if (n < 0 || m < 0) { return 0; }
//   return n*m;
// }
// console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
// console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
// console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
// console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
// console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
//
// 8kyu Opposites Attract
// if one num is even, the other is odd, return true
// const lovefunc = (f1, f2) => (f1 + f2) % 2 == 1
// Common solution:
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
// }
//
// 8kyu Sum Arrays
// Sum Numbers
// function sum (numbers) {
//     "use strict";
    
    
// };
// const sum = (numbers) => numbers.reduce ((t,c) => { return t + c; }, 0);
// console.log(sum([1, 5.2, 4, 0, -1]));
// shorter solution:
// const sum = n => n.reduce((a,b) => a+b, 0);
//
// 8kyu Fake Binary
// Given a string of digits replace <5 with 0 and above 5 with 1
// function fakeBin(x){

// }
// const fakeBin = (x) => x.replace(/\d/g, d => d < 5 ? 0 : 1);
// Another solution:
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
//
// 8kyu Are You Playing Banjo?
// function areYouPlayingBanjo(name) {
//     if (name[0].toUpperCase() === 'R') {
//       return name + ' plays banjo';
//     } else {
//       return name + ' does not play banjo';
//     }
// }
//
// 8kyu Calculate average
// Write a function which calculates the average of the numbers in a given list.
// function find_average(array) {
//     if (array.length < 1) {
//       return 0
//     } else {
//       return array.reduce((a, b) => a + b, 0) / array.length;
//     }
// }
// Another solution:
// function find_average(arr) {
//     return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
// }
//
// 8kyu Is he gonna survive?
// const hero = (b, d) => b / d >= 2
// Common solution:
// function hero(bullets, dragons){
//     return bullets >= dragons * 2
// }
//
// 8kyu Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.
// const reverseSeq = n => {
//     return [];
//   };
// const reverseSeq = n => {
// if (n < 0) return [];
// let arr = [];
// for (n; n > 0; n--) {
//     arr.push(n);
// }
// return arr;
// };
// Another solution:
// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
// };
//
// 8kyu Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     if (bmi <= 18.5) {
//         return "Underweight"; 
//     }
//     else if (bmi <= 25.0) {
//         return "Normal";
//     }
//     else if (bmi <= 30.0) {
//         return "Overweight";
//     }
//     else {
//         return "Obese";
//     }
// }
//
// 8kyu You only need one-Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
function check(a, x) {
    return a.includes(x);
}
// Common solution:
// const check = (a,x) => a.includes(x);