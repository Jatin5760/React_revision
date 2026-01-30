/*
================================================================================
  UNDER THE HOOD: PROTOTYPES, GENERATORS & PROXIES
================================================================================

  THEORY:
  
  1. PROTOTYPES (Inheritance Model):
     - Every JS Object has a hidden property `[[Prototype]]` (accessible via `__proto__`).
     - *Chain*: If you access `dog.speak`, JS looks in `dog` object. If not found, it looks in `dog.__proto__`. If not found, looks in `dog.__proto__.__proto__`, until it hits `null`.
     - *Class is Sugar*: `class Dog {}` essentially creates a function and assigns methods to `Dog.prototype`.

  2. GENERATORS (`function*`):
     - Functions that can be PAUSED and RESUMED.
     - *Execution*: Calling a generator doesn't run code; it returns an "Iterator" object.
     - *Yield*: `yield value` pauses function and returns value. Calling `.next()` resumes execution until next yield.
     - *Use Case*: Async flows (Redux-Saga), generating infinite sequences without crashing memory.

  3. PROXY (Meta-programming):
     - Wraps an object to *intercept* fundamental operations (read, write, delete, function call).
     - *Handler*: Object defining "traps" (methods like `get`, `set`).
     - *Magical*: Can be used for validation, logging, data binding (Vue 3 Reactivity), or creating "impossible" APIs.

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
