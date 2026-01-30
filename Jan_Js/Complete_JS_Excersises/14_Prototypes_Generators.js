/*
================================================================================
  UNDER THE HOOD: PROTOTYPES, GENERATORS & PROXIES
================================================================================

  THEORY:
  1. PROTOTYPES: JavaScript is prototype-based, not class-based. 
     Classes are just "syntactic sugar" over prototypes.
     Every object has a `__proto__` property pointing to its parent.

  2. GENERATORS (`function*`): Functions that can pause (`yield`) and resume.
     Returns an iterator object with `.next()`.
     Used in Redux-Saga or complex async flows.

  3. PROXY: Object that wraps another object to intercept operations 
     (reading, writing, deleting properties).

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 14 UNDER THE HOOD ---");

// ------------------------------------------
// 1. PROTOTYPES (The Old Way)
// ------------------------------------------
/*
  TODO:
  1. Create a constructor function `Animal(name)`.
  2. Add a method `speak` to `Animal.prototype`.
  3. Create an instance `dog` using `new Animal("Dog")`.
  4. Call `dog.speak()` and check `dog.__proto__ === Animal.prototype`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. GENERATORS (Pausing Execution)
// ------------------------------------------
/*
  TODO:
  1. Create a generator function `idGenerator*`.
  2. Inside a `while(true)` loop, `yield` an incrementing number.
  3. Create the iterator: `const gen = idGenerator()`.
  4. Call `gen.next().value` 3 times to get 1, 2, 3.
  (This creates an infinite id generator!).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. PROXY (Magic Interception)
// ------------------------------------------
/*
  TODO:
  1. Target object: `user = { name: "Alice", age: 25 }`.
  2. Create a Proxy handler that intercepts `get`.
     - If property exists, return it.
     - If not, return "Property not found!".
  3. Create `proxyUser = new Proxy(user, handler)`.
  4. Access `proxyUser.name` (should work).
  5. Access `proxyUser.salary` (should return custom message).
*/

// YOUR CODE HERE:
