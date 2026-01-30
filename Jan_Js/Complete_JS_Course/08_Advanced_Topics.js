/*
================================================================================
  ADVANCED CONCEPTS: THIS, CALL/APPLY/BIND & IIFE
================================================================================

  THEORY:
  
  1. THE `this` KEYWORD:
     - The most misunderstood concept. `this` refers to the *context* of where a function is CALLED, not where it's defined (unless arrow func).
     - *In Method*: Object calling the method. (`obj.func()` -> `this` is `obj`).
     - *In Global*: Window (or global in Node).
     - *In Constructor*: The new instance being created.
     - *In Arrow Func*: The parent scope's `this` (Lexical).

  2. EXPLICIT BINDING (Controlling `this`):
     - Sometimes `this` gets lost (e.g. inside a callback or event listener). We can manually fix it:
     - `call(thisObj, arg1, arg2)`: Executes function IMMEDIATELY with specified `this`.
     - `apply(thisObj, [array])`: Same as call, but arguments are passed as an array.
     - `bind(thisObj)`: Does NOT execute immediately. Returns a NEW function copy with `this` permanently set.
       *Use Case*: React Event Handlers, Partial Application.

  3. IIFE (Immediately Invoked Function Expression):
     - Syntax: `(function() { ... })();`
     - Runs as soon as it is defined.
     - *Why?* Before "Modules" (ES6), this was the only way to create a "private scope" so variables don't leak into current global scope.

  4. CLOSURES (Deep Dive):
     - A function combined with its "Lexical Environment".
     - Analogy: A function carries a "backpack". Even if you export the function to a completely different file, it still has access to the variables present when it was created.

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
