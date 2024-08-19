/**
 * function outerFunction() {
 *  let outerVariable = 'I am from the outer function';
 *
 *  function innerFunction() {
 *    console.log(outerVariable); // innerFunction can use outerVariable
 *  }
 *
 *  return innerFunction;
 * }
 *
 * const myClosure = outerFunction();
 *
 * myClosure(); // This will print: 'I am from the outer function'
 */

// Create a counter function which has increment and getValue functionality;

function counter(initialValue = 0) {
  let count = initialValue;

  function increment(valueToIncrement = 1) {
    count += valueToIncrement;
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    getValue,
  };
}

const myCounter = counter();

console.log(myCounter.getValue());
myCounter.increment();
console.log(myCounter.getValue());
myCounter.increment(3);
console.log(myCounter.getValue());
