/*
================================================================================
  CONTROL FLOW & LOOPS
================================================================================

  THEORY:
  
  1. CONDITIONALS:
     - `if (condition) { ... } else { ... }`
     - `switch`: Useful for checking a variable against multiple distinct values.
     - Ternary Operator: `condition ? trueValue : falseValue`. Concise for assignments.
     - Nullish Coalescing (`??`): Returns right-hand side ONLY if left is `null` or `undefined` (unlike `||` which checks falsy).

  2. LOOPS:
     - `for`: Standard loop with initializer, condition, iterator.
     - `while`: Runs key logic as long as condition is true.
     - `do...while`: Runs at least once, then checks condition.
     - `for...of`: Modern loop for Iterables (Arrays, Strings, Maps). Direct access to values.
     - `for...in`: Loops over *Enumerable Properties* (Keys) of an Object (or indices of array).

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 02 CONTROL FLOW & LOOPS ---");

// ------------------------------------------
// 1. CONDITIONALS (If, Switch, Ternary)
// ------------------------------------------
/*
  TODO:
  1. Create a variable `role` = "admin".
  2. Use a Switch statement to log:
     - "Full Access" if role is "admin"
     - "Limited Access" if role is "editor"
     - "No Access" for default.
     
  3. Create variable `isLoggedIn` = true.
  4. Use a Ternary Operator to construct a message: "Welcome Back" if true, "Please Login" if false.
     Log the message.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. NULLISH COALESCING vs OR
// ------------------------------------------
/*
  TODO:
  1. Create `count` = 0.
  2. Log `count || 10`. (Should be 10, because 0 is falsy).
  3. Log `count ?? 10`. (Should be 0, because 0 is NOT null/undefined).
  This distinction is crucial for default values in apps!
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. LOOPS (For, While)
// ------------------------------------------
/*
  TODO:
  1. Write a `for` loop to print numbers from 1 to 5.
  2. Write a `while` loop that prints numbers from 5 down to 1.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. MODERN ITERATION (For...of)
// ------------------------------------------
/*
  TODO:
  1. Create an array `skills` = ["HTML", "CSS", "JS", "React"].
  2. Use `for...of` to log each skill. 
     (This is cleaner than a standard for loop for arrays).
     
  3. Create a string `greeting` = "Hello".
  4. Use `for...of` to log each character.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 5. BREAK & CONTINUE
// ------------------------------------------
/*
  TODO:
  1. Loop from 1 to 10.
  2. If number is 5, use `continue` (skip printing).
  3. If number is 8, use `break` (stop loop).
  4. Log the numbers.
*/

// YOUR CODE HERE:
