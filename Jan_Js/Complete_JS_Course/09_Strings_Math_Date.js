/*
================================================================================
  STRINGS, MATH & DATE OBJECTS
================================================================================

  THEORY:
  
  1. STRINGS (Immutable Text):
     - *Immutability*: You CANNOT change a character at an index (`str[0] = "A"` won't work). Methods always return a NEW string.
     - *Extraction*: 
       - `slice(start, end)`: Supports negative indices (counts from end). END excluded.
       - `substring(start, end)`: Swaps arguments if start > end. Treating negative as 0.
     - *Methods*: `trim()` (removes whitespace), `split()` (string -> array), `replace()` (matches first only unless regex/replaceAll used).

  2. MATH (Static Utility):
     - NOT a constructor (you can't say `new Math()`).
     - *Rounding*:
       - `Math.round(4.5)` -> 5 (Standard)
       - `Math.ceil(4.1)` -> 5 (Always Up)
       - `Math.floor(4.9)` -> 4 (Always Down)
     - *Random*: `Math.random()` gives 0 to 0.999...
       *Formula*: `Math.floor(Math.random() * (max - min + 1)) + min` to get integer in range.

  3. DATE (Time Handling):
     - Stored as milliseconds since Epoch (Jan 1, 1970 UTC).
     - *Pitfall*: `getMonth()` is 0-indexed (Jan = 0, Dec = 11). `getDate()` is 1-indexed (1-31).
     - *Creation*: `new Date()` (Now), `new Date("2023-01-01")` (String), `new Date(2023, 0, 1)` (Params).
     - *Formatting*: `toLocaleString()` conforms to user's system locale (e.g., MM/DD/YYYY vs DD/MM/YYYY).

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 09 STRINGS, MATH & DATE ---");

// ------------------------------------------
// 1. STRING MANIPULATION
// ------------------------------------------
/*
  TODO:
  1. Create variable `text` = "  Hello, JavaScript World!  ".
  2. Log the length.
  3. Use `trim()` to remove extra spaces.
  4. Use `replace()` to change "JavaScript" to "React".
  5. Use `split(",")` to split it into an array at the comma.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. MATH OPERATIONS
// ------------------------------------------
/*
  TODO:
  1. Generate a random integer between 1 and 10.
     Hint: Math.floor(Math.random() * 10) + 1.
  2. Find the maximum number from this list: 10, 50, 5, 100. (Math.max).
  3. Round the number 4.7 to the nearest integer.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. DATE & TIME
// ------------------------------------------
/*
  TODO:
  1. Create a `now` date object.
  2. Log the current Year.
  3. Create a specific date: "2025-01-01".
  4. Convert `now` to a readable string using `toLocaleDateString()`.
*/

// YOUR CODE HERE:
