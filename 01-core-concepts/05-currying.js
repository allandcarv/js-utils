/**
 * Currying in JavaScript is a powerful functional programming technique
 * that enhances code flexibility, readability, and reuse.
 * By transforming functions into a sequence of single-argument functions,
 * currying enables partial application and facilitates function composition.
 */

// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

const multiply = (firstValue) => (secondValue) => firstValue * secondValue;

console.log(multiply(2)(3));

const tableOf2 = multiply(2);

for (let i = 0; i <= 10; i++) {
  console.log(tableOf2(i));
}

// Create a curry function
const curry = (fn) => {
  const argsLength = fn.length;

  const returnFn = (...args) => {
    if (args.length >= argsLength) {
      return fn(...args);
    }

    return (...moreArgs) => returnFn(...args, ...moreArgs);
  };

  return returnFn;
};

const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
console.log(partiallyCurriedSum(2, 3));

console.log(curriedSum(10, 20, 30));

const get = curry((property, object) => object[property]);

const getId = get('id');
console.log(getId({ id: 'xyz' }));

const map = curry((fn, values) => values.map(fn));
console.log(map(getId, [{ id: 1 }]));

const getIds = map(getId);
console.log(getIds([{ id: 1 }, { id: 2 }, { id: 3 }]));
