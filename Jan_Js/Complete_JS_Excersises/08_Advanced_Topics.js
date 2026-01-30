/*
================================================================================
  ADVANCED CONCEPTS: THIS, CALL/APPLY/BIND & IIFE
================================================================================

  THEORY:
  1. `this`: Context reference. Changes based on HOW function is called.
  2. Call/Apply/Bind: Methods to manually set `this` context.
     - `call(thisObj, arg1, arg2)`: Invokes immediately.
     - `apply(thisObj, [argsArray])`: Invokes immediately (args in array).
     - `bind(thisObj)`: Returns a NEW function with `this` permanently bound. 
  3. IIFE (Immediately Invoked Function Expression): `(function(){ ... })();`. 
     Used to create local scope and avoid global pollution.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 08 ADVANCED TOPICS ---");

// ------------------------------------------
// 1. EXPLICIT BINDING (Call, Apply, Bind)
// ------------------------------------------
/*
  TODO:
  1. Object `person1` = { name: "Alice" }.
  2. Object `person2` = { name: "Bob" }.
  3. Function `introduce(greeting, role)` { log `${greeting} I am ${this.name}, a ${role}` }.
  
  4. Use `.call()` to make person1 introduce herself.
  5. Use `.apply()` to make person2 introduce himself (pass args as array).
  6. Use `.bind()` on person1 to create `introduceAlice` function, then call it later.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. IIFE (Immediately Invoked Function Expression)
// ------------------------------------------
/*
  TODO:
  1. Create an IIFE that logs "I run immediately!".
  2. Try to access variables declared inside it from outside (should fail).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. CLOSURE PUZZLE (Interview Question)
// ------------------------------------------
/*
  TODO:
  1. Create a loop `for (var i = 1; i <= 3; i++)`.
  2. Inside, use `setTimeout` to log `i` after 1 second.
  3. Run it. You will see "4 4 4" instead of "1 2 3". Why? (Var is function/global scoped).
  4. Fix it by changing `var` to `let` (Block scope creates new binding per iteration).
*/

// YOUR CODE HERE:
