const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
const fruits = ['banana', 'apple'];

const concatenateArrays = (...arrays) =>
  arrays.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(...cur);
    }

    return acc;
  }, []);

console.log(concatenateArrays(numbers, letters, fruits));
console.log(numbers);
console.log(letters);
console.log(fruits);
