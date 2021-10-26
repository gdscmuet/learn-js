// Ternary Operator in Javascript

// Ternary operators are conditional operators can be use like if and else condition.
// It takes three operands
// 1) condition to check with ?
// 2) an expression to execute if the condition is true with :
// 3) and last expression if the given condition is false

let a = 5;
let b = 4;

// USING TERNARY OPERATOR
a > b ? console.log("a is greater than b") : console.log("a and b are not equal");


// USING IF AND ELSE
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a and b are not equal");
}

// OUTPUT
// a is greater than b