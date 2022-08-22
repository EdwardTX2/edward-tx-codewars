//8kyu - Multiply
//This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b
//   }
//
// change to: return a * b;
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5,6));
// best solution
// multiple = (a, b) => a * b;
//
// 8kyu - Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function even_or_odd(number) {
//
//}
// even_or_odd = (num) => num %2 === 0 ? "Even" : "Odd";
// console.log(even_or_odd(5));
// console.log(even_or_odd(4));
// console.log(even_or_odd(8));
//best solution
// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
//   }
//
// 8kyu - Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
//
// function opposite(number) {
//     //your code here
//   }
// const opposite = (num) => -(num);
// console.log(opposite(1));
// console.log(opposite(14));
// console.log(opposite(-34));
// // best solution:
// function opposite(number) {
//     return(-number);
// }
//
// 8kyu - Convert a String to a Number!
// const stringToNumber = function(str){
//     // put your code here
//     return null;
//   }
// const stringToNumber = (str) => Number(str);
// console.log(stringToNumber("1234"));
// console.log(stringToNumber("605"));
// console.log(stringToNumber("-7"));
// Best solutions
// var stringToNumber = function(str){
//     return parseInt(str);
// }
// var stringToNumber = function(str){
//     // put your code here
//     return Number(str);
// }
//
// 8kyu - Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// function numberToString(num) {
//     // Return a string of the number here!
//   }
// const numberToString = (num) => num.toString();
// console.log(numberToString(1234));
// console.log(numberToString(605));
// console.log(numberToString(-7));
// Other solution:
// function numberToString(num) {
//     //Return a string of the number here!
//     return String(num);
// }
//
// 8kyu - Convert boolean values to strings "Yes" or "No"
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//     //...
//   }
// const boolToWord = (boo) => boo === true ? "Yes" : "No"
// console.log(boolToWord(true));
// console.log(boolToWord(false));
// console.log(boolToWord(true));
// Most common solution:
// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
// }
// 8kyu - ReversedStrings
// Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     let reversedStr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i]
//     }
//     return reversedStr;
// }
// console.log(solution("Testing"));
// console.log(solution("Whatever"));
// console.log(solution("Nowadays"));
// // refactored
// const solution = (str) => str.split("").reverse().join("");
//
// 8kyu - Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// function makeNegative(num) {
//     //  Code?
//   }
// const makeNegative = (num) => num >= 0 ? -num : num;
// other solution:
// function makeNegative(num) {
//     return -Math.abs(num);
// }
//
// 8kyu - Sum of positive
// function positiveSum(arr) {
  
// }
// const positiveSum = (arr) => arr.reduce((acc, c) => c > 0 ? acc + c : acc, 0);
// console.log(positiveSum([5,3,-4,8,-2]));
//
// 8kyu String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function repeatStr (n, s) {
//     return '';
//   }
// const repeatStr = (n, s) => s.repeat(n)
// console.log(repeatStr(5, 'Testing'));
// Most often solution:
// function repeatStr (n, s) {
//     return s.repeat(n);
// }
//!Ranked up to 7kyu
//
// 8kyu - Remove First and Last Character
// function removeChar(str){
//     //You got this!
//    };
// const removeChar = (str) => str.substring(1, str.length - 1);
// console.log(removeChar("Welcome"));
// Best solution:
// function removeChar(str) {
//     return str.slice(1, -1);
//  }
// or:
// const removeChar = str => str.slice(1,-1)
//
// 8kyu Find the smallest integer in the array (not empty)
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
      
//     }
//   }
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args);
//     }
// }
// let sif = new SmallestIntegerFinder;
// console.log(sif.findSmallestInt([78, 54, 44, 2, 88]));
// A solution using sort:
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       args.sort(function(a, b) {
//       return a - b; } )
//       return args[0];
//     }
// }
//
// 8kyu - Square(n)Sum
// Square each number passed in and sum the results together
// function squareSum(numbers){

// }
// const squareSum = (nums) => nums.reduce((acc, c) => acc + c*c, 0);
// console.log(squareSum([5,2,3]));
// Other solution:
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
// }
//
// 8kyu Remove String Spaces
// function noSpace(x){

// }
const noSpace = (str) => str.replace(/\s/g, '');
console.log(noSpace("What are we even doing here?"))
// Solution using split and join methods
// function noSpace(x){return x.split(' ').join('')}