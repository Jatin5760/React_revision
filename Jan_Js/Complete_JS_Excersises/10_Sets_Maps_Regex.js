/*
================================================================================
  MODERN STRUCTURES: SETS, MAPS & REGEX
================================================================================

  THEORY:
  1. SET: Collection of UNIQUE values.
     - `new Set([iterable])`
     - `.add(val)`, `.delete(val)`, `.has(val)`, `.size`.
     - Use Case: Removing duplicates from arrays.

  2. MAP: Collection of Key-Value pairs (Keys can be ANY type, not just strings).
     - `new Map()`
     - `.set(key, val)`, `.get(key)`, `.has(key)`, `.size`.
     - Maintains insertion order.

  3. REGEX (Regular Expressions): Patterns to match character combinations.
     - `/pattern/flags`
     - `.test(string)`: Returns true/false.
     - `.match(regex)`: Returns array of matches.
     - Common patterns: `\d` (digit), `\w` (word char), `^` (start), `$` (end).

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 10 SETS, MAPS & REGEX ---");

// ------------------------------------------
// 1. SETS (Unique Values)
// ------------------------------------------
/*
  TODO:
  1. Create an array with duplicates: `[1, 2, 2, 3, 4, 4, 5]`.
  2. Convert it to a Set to remove duplicates.
  3. Convert the Set back to an Array using spread `[...]`.
  4. Log the cleaned array.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. MAPS (Key-Value)
// ------------------------------------------
/*
  TODO:
  1. Create a `new Map()`.
  2. Set "name" -> "Alice" (String key).
  3. Set 1 -> "One" (Number key!).
  4. Set true -> "BooleanKey" (Boolean key!).
  5. Log `.get(1)` and `.get("name")`.
  Note: Ordinary objects usually convert keys to strings. Maps don't.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. REGEX (Validation)
// ------------------------------------------
/*
  TODO:
  1. Create a regex to check for a simple email pattern: `/\S+@\S+\.\S+/`.
     (\S = non-whitespace).
  2. Test it against "test@test.com" (should be true).
  3. Test it against "invalid-email" (should be false).
  
  4. Create a string "I have 100 dollars and 50 cents".
  5. Use `.match(/\d+/g)` to find all numbers. (d+ means one or more digits, g means global).
*/

// YOUR CODE HERE:
