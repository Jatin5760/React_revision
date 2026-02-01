/*
================================================================================
  ASYNC JAVASCRIPT: PROMISES & ASYNC/AWAIT
================================================================================

  THEORY:
  
  1. THE PROBLEM (Synchronous Blocking):
     - JS is "Single Threaded". It has one Call Stack.
     - If you run a slow task (like a 5-sec loop or big file read), the UI *freezes*.
     - *Solution*: Asynchronous callbacks (Web APIs) handle tasks in background, then push result to queue.

  2. PROMISES (The Better Callback):
     - An object representing the eventual completion (or failure) of an async operation.
     - *3 States*:
       1. **Pending**: Initial state, neither fulfilled nor rejected.
       2. **Fulfilled (Resolved)**: Operation completed successfully. (Value is passed to `.then`).
       3. **Rejected**: Operation failed. (Error is passed to `.catch`).
     - *Immutability*: Once settled (resolved/rejected), state cannot change.

  3. ASYNC / AWAIT (ES8):
     - Syntactic sugar built ON TOP of Promises.
     - `async` function: Always returns a Promise automatically.
     - `await`: Pauses execution of the function (non-blocking for outside code) until the Promise resolves.
     - *Error Handling*: Since we don't have `.catch()`, we MUST wrap await calls in `try { ... } catch (err) { ... }` blocks.

  4. FETCH API:
     - Modern replacement for XMLHttpRequest (AJAX).
     - Returns a Promise that resolves to the *Response* object (headers, status).
     - You must call a method like `.json()` or `.text()` (which also returns a Promise) to get the actual body data.

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
