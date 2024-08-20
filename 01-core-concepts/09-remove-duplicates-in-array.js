const removeDuplicates = (array) => [...new Set(array)];

const numbers = [1, 1, 2, 3, 4, 1, 2, 5, 6];

console.log(removeDuplicates(numbers));
console.log(numbers);
