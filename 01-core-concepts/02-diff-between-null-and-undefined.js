// What will be logged in first example and in second example
let var1;
console.log(var1); //undefined
console.log(typeof var1); //undefined

let var2 = null;
console.log(var2); //null
console.log(typeof var2); //object

console.log(var3); // ReferenceError: var is not defined

// undefined means the variable is declared but its value is not defined
// null is and assignment value, means the variable is declared and given the value of null

/**
 * This is a bug since the first release of ECMAScript which unfortunately can’t be fixed
 * because it would break the existing code.
 *
 * In the initial version of JavaScript, values were stored in 32 bit units which consisted
 * of a small type tag (1–3 bits) and the actual data of the value. The type tags were
 * stored in the lower bits of the units. There were five of them:
 *
 * 000: object. The data is a reference to an object.
 * 1: int. The data is a 31 bit signed integer.
 * 010: double. The data is a reference to a double floating point number.
 * 100: string. The data is a reference to a string.
 * 110: boolean. The data is a boolean.
 *
 * For all objects it was 000 as the type tag bits. null was considered to
 * be a special value in JavaScript from its very first version. null was a
 * representation of the null pointer. However, there were no pointers in JavaScript
 * like C. So null simply meant nothing or void and was represented by all 0’s.
 * Hence all its 32 bits were 0’s. So whenever the JavaScrit interpreter reads null,
 * it considers the first 3 bits as type “object”. That is why typeof null returns “object”.
 */
