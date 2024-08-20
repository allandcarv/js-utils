// Find the number of occurrences of minimum value in the list

const getMinOccurrences = (arr) => {
  const minValue = Math.min(...arr);

  const minValues = arr.filter((el) => el === minValue);

  return minValues.length;
};

const numbers = [0, 0, 0, 1, 2, 3, 4, 5, -1, -1];
console.log(getMinOccurrences(numbers));
