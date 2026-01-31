/*
================================================================================
  FUNCTIONS, SCOPE & THIS
================================================================================

  THEORY:
  
  1. FUNCTION DECLARATIONS VS EXPRESSIONS:
     - Function Declaration (`function abc(){}`): Defines a named function.
       *Key Feature*: HOISTED. You can call `abc()` BEFORE lines where it is defined in the code.
     - Function Expression (`const abc = function(){}`): Assigns anonymous function to variable.
       *Key Feature*: NOT HOISTED. Must be defined before calling. Useful for passing functions as data.
     
  2. ARROW FUNCTIONS (`() => {}`):
     - Introduced in ES6. Shorter syntax.
     - *Implicit Return*: If one-liner `x => x * 2`, no need for `{}` or `return` keyword.
     - *Lexical `this`*: The biggest difference. Arrow functions DO NOT have their own `this`. 
       They inherit `this` from the parent scope (where they were defined). 
       This solves many issues in callbacks where `this` would unexpectedly become `window` or `undefined`.

  3. PARAMETERS:
     - Default Parameters (`func(a=1)`): If argument is missing/undefined, uses default value.
     - Rest Parameter (`func(...args)`): Collects "the rest" of the arguments into a single *Array*.
       Allows handling infinite or variable number of arguments.

  4. SCOPE (Visibility of Variables):
     - Global: Variables declared outside any function. Accessible everywhere. Bad practice to overuse.
     - Function Scope: Variables declared with `var` inside a function are locked to that function.
     - Block Scope: Variables declared with `let` or `const` inside `{}` (if, for, etc) are locked to that block.
     - *Lexical Environment*: A function has access to its own variables + variables in its parent's scope.

  5. CLOSURE:
     - When a function returns another function, the inner function "remembers" the variables from the outer function's scope
       even after the outer function has finished executing.
     - Used for: Data hiding (private variables), Function factories (currying).

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 03 FUNCTIONS ---");

// ------------------------------------------
// 1. DECLARATION vs EXPRESSION vs ARROW
// ------------------------------------------
/*
  TODO:
  1. Write a Function Declaration `add(a, b)` that returns sum.
  2. Write a Function Expression `multiply = function(a,b)` that returns product.
  3. Write an Arrow Function `subtract = (a, b) => ...` that returns difference.
     (Try implicit return for the arrow function: `(a,b) => a - b`).
  4. Log the result of using all three.
*/

// YOUR CODE HERE:
function add(a, b) {
  return a + b;
}

let ans = add(3, 4);
console.log(ans);


const multi = (a, b)=>{
  return a * b;
}

let multiply = multi(7, 5);
console.log(multiply);




// ------------------------------------------
// 2. ARROW FUNCTION & THIS (Context)
// ------------------------------------------
/*
  TODO:
  This exercise demonstrates why we use arrow functions in callbacks usually.
  
  1. Create an object `user`.
  2. Property `name`: "Alice".
  3. Method `greetRegular`: function() { log "Hello " + this.name }.
  4. Method `greetArrow`: () => { log "Hello " + this.name }.
  
  5. Call `user.greetRegular()` (Should work, 'this' refers to user object).
  6. Call `user.greetArrow()` (Should fail/undefined, 'this' refers to global context).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. REST PARAMETERS
// ------------------------------------------
/*
  TODO:
  1. Create a function `calculateTotal(...prices)`.
  2. The function receives any number of arguments.
  3. Use a loop (or reduce) inside the function to sum them up.
  4. Call it with `calculateTotal(10, 20, 30)` and `calculateTotal(5, 5)`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. CLOSURE (Intro)
// ------------------------------------------
/*
  THEORY: A closure is a function that "remembers" its outer variables even after the outer function has returned.
  
  TODO:
  1. Create a function `createCounter()`.
  2. Inside, declare `let count = 0`.
  3. Return an inner function that does: `count++` and returns `count`.
  4. Create `myCounter = createCounter()`.
  5. Call `myCounter()` multiple times and log result. It should increment (1, 2, 3...).
     (The inner function maintains access to `count` variable).
*/

// YOUR CODE HERE:
