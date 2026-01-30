/*
================================================================================
  FUNCTIONAL PROGRAMMING: RECURSION, CURRYING & INTL
================================================================================

  THEORY:
  1. RECURSION: A function calling itself to solve smaller instances of a problem.
     Must have a "Base Case" to stop execution.
  
  2. CURRYING: Transforming `f(a, b, c)` into `f(a)(b)(c)`.
     Useful for creating reusable utility functions.

  3. INTL API: Internationalization for formatting dates, numbers, and currencies
     correctly across different locales (US, IN, DE, etc.).

  4. STRICT MODE: `'use strict';` enables stricter parsing and error handling.
     (Automatically enabled in ES6 Modules).

*/

'use strict'; // Enforce strict mode for this file

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 16 FUNCTIONAL & INTL ---");

// ------------------------------------------
// 1. RECURSION
// ------------------------------------------
/*
  TODO:
  1. Create a function `factorial(n)`.
     - 5! = 5 * 4 * 3 * 2 * 1 = 120.
  2. Base Case: if n is 0 or 1, return 1.
  3. Recursive Step: return n * factorial(n - 1).
  4. Test with console.log(factorial(5)).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. CURRYING
// ------------------------------------------
/*
  TODO:
  1. Create a normal function `multiply(a, b)` that returns a * b.
  2. Create a curried version `curriedMultiply(a)` that returns a function taking `b`.
  3. Use it to create a helper: `const double = curriedMultiply(2)`.
  4. Call `double(10)` -> Should return 20.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. INTL (Currency Formatting)
// ------------------------------------------
/*
  TODO:
  1. Create a variable `price` = 123456.789.
  2. Format it as USD: `new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)`.
  3. Format it as Indian Rupee (INR): use 'en-IN' and currency 'INR'.
  4. Log both.
  
  (Notice how INR handles commas differently: 1,23,456.79 vs 123,456.79).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. MEMOIZATION (Bonus Optimization)
// ------------------------------------------
/*
  THEORY: Caching results of expensive function calls.
  
  TODO:
  1. Create a simple cache object `{}`.
  2. Write a function `memoizedAdd(n)`:
     - If n is in cache, return cache[n].
     - Else, calculate result (e.g., n + 10), store in cache, and return it.
  3. Run it twice for the same number and log logic to see if it calculated or returned from cache.
*/

// YOUR CODE HERE:
