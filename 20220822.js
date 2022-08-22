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
const century = (year) => Math.ceil(year *.01)
console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
// common solution:
// const century = year => Math.ceil(year/100)