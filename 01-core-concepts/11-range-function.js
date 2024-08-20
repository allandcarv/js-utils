// Write a function to implement a range of numbers

// range(1, 50)
// 1,2,3, ...,50

const getRange = (start, end) => {
  let min = start;
  let max = end;

  if (min > max) {
    [min, max] = [max, min];
  }

  return Array.from({ length: max - min + 1 }, (_v, i) => i + min).join(', ');
};

console.log(getRange(1, 10));
console.log(getRange(10, 1));
console.log(getRange(-10, 0));
