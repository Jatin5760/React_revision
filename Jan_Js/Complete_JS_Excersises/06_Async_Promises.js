/*
================================================================================
  ASYNC JAVASCRIPT: PROMISES & ASYNC/AWAIT
================================================================================

  THEORY:
  1. SYNCHRONOUS: Code runs line by line. If one line takes 10s, everything waits.
  2. ASYNCHRONOUS: Code (like API calls, timers) runs in background, non-blocking.
  
  3. EVOLUTION:
     - Callbacks: Old way. Prone to "Callback Hell" (nested indentation).
     - Promises: Object representing future success/failure. (.then, .catch).
     - Async/Await: Syntactic sugar over Promises. Looks synchronous but is async.

  4. KEY PROMISE STATES: Pending, Fulfilled (Resolved), Rejected.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 06 ASYNC JS ---");

// ------------------------------------------
// 1. SIMPLE CALLBACK (setTimeout)
// ------------------------------------------
/*
  TODO:
  1. Use `setTimeout`.
  2. Pass a callback function that logs "Task Complete" after 2000ms (2 seconds).
  3. Log "Start Task" immediately before the setTimeout. 
     (Notice "Start Task" prints first).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. CREATING A PROMISE
// ------------------------------------------
/*
  TODO:
  1. Create a function `orderPizza()`.
  2. Return a new Promise((resolve, reject) => { ... }).
  3. Inside, use setTimeout to simulate 3 sec delay.
  4. If success (simulate with boolean), call `resolve("Pizza Delivered")`.
  5. If fail, call `reject("Oven Broken")`.
  
  6. Call `orderPizza()` and handle it with `.then(msg => console.log(msg))` and `.catch(err => console.error(err))`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. ASYNC / AWAIT (Modern Way)
// ------------------------------------------
/*
  TODO:
  1. Create an `async` function `handleOrder()`.
  2. Inside, add a `try...catch` block.
  3. Inside try: `await` the `orderPizza()` function you created above.
  4. Log the result.
  5. Inside catch: Log the error.
  
  (Async/Await makes code look like: `let result = await func();` clean and linear).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. FETCH API (Simulation)
// ------------------------------------------
/*
  TODO:
  1. Create an async function `getUserData()`.
  2. Use `fetch('https://jsonplaceholder.typicode.com/users/1')`.
     (Note: fetch returns a promise).
  3. Await the response.
  4. Convert response to json: `const data = await response.json()`.
  5. Log the user's name.
  
  NOTE: This requires internet access. If offline, the fetch will reject.
*/

// YOUR CODE HERE:
