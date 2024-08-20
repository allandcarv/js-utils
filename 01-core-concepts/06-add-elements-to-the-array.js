// Write a function that gets an array and an element and returns an array with this element at the end;

const addElementToArray = (array, el) => [...array, el];

const numbers = [1, 2, 3];
console.log(addElementToArray(numbers, 4));
console.log(numbers);
