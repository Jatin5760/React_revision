/*
================================================================================
  FUNCTIONS, SCOPE & THIS
================================================================================

  THEORY:
  
  1. FUNCTION TYPES:
     - Declaration: `function name() {}`. Hoisted (can use before definition).
     - Expression: `const name = function() {}`. Not hoisted.
     - Arrow Function: `const name = () => {}`. Concise syntax. 
       **Crucial Difference**: Arrow functions do NOT have their own `this`. They inherit it from parent scope.

  2. PARAMETERS:
     - Default Params: `function(a = 10)`.
     - Rest Parameter: `function(...args)`. Collects all arguments into an array.

  3. SCOPE:
     - Global Scope: Accessible everywhere.
     - Function Scope: Accessible only inside function (var).
     - Block Scope: Accessible only inside {} (let, const).

  4. HOISTING:
     - Moving declarations to top of scope during compilation.
     - `var` is hoisted and initialized as `undefined`.
     - `let` and `const` are hoisted but are in a "Temporal Dead Zone" (cannot access before declaration).
     - Function Declarations are fully hoisted.

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
