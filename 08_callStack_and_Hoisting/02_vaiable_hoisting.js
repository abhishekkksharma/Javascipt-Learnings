// VARIABLE HOISTING-
// here this will print undefined because the variable is hoisted to the top however it is not defined(it does not hoist the value to the top along with it)

// ## in case of functions the whole function slong side its content it hoisted
console.log(age);

var age =25;


// Using let and const- (hoisting not possible)
console.log(age2); //ReferenceError
console.log(age3); //ReferenceError

let age2=65;
const age3=45;