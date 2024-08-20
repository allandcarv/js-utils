// Write a function to shuffle and array

const shuffleArray = (arr) =>
  arr.toSorted(() => Math.floor(Math.random() * (1 - -1) + -1));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['banana', 'apple', 'peach', 'lemon'];

console.log(shuffleArray(numbers));
console.log(shuffleArray(fruits));
