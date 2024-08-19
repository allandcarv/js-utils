/**
 * HOISTING: variable declaration will bubble to the top of the file
 */

// What will be console.logged here

// Question 1
// console.log(foo);
// foo = 1;
// ReferenceError: is not defined

// Question 2
console.log(var2);
var var2 = 2;
// undefined

// Question 3
var3 = 3;
console.log(var3);
var var3;
// 3

function myFunc() {}

// IMPORTANT: const and let are not affected by hoisting
