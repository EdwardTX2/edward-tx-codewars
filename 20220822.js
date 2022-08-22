// 8kyu - Keep Hydrated!
// Nathan drinks 0.5 litres of water per hour of cycling. Given the time in hours you need to return the number of litres Nathan will drink, rounded to the smallest value
// function litres(time) {
//     return 0;
// }
const litres = (time) => parseInt((time/2))
console.log(litres(2))
console.log(litres(1.4))
console.log(litres(12.3))
// Most used solution:
// function litres(time) {
//     return Math.floor(time * 0.5);
// }