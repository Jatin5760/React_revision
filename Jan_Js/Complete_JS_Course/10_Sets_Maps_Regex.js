/*
================================================================================
  MODERN STRUCTURES: SETS, MAPS & REGEX
================================================================================

  THEORY:
  
  1. SET (Unique Collection):
     - An Array-like structure that enforces UNIQUENESS.
     - `new Set([1, 1, 2])` -> Stores `{1, 2}`.
     - *Methods*: `.add(val)`, `.delete(val)`, `.has(val)`, `.clear()`.
     - *Use Case*: Fastest way to deduplicate an array (`[...new Set(array)]`).
     - *WeakSet*: Holds "weak" references to objects (garbage collection friendly), no iteration.

  2. MAP (Better Object):
     - Key-Value pairs where Keys can be ANY type (Object, Function, Number), unlike Objects where keys are forced Strings.
     - *Pros vs Object*:
       1. Preserves insertion order (Objects usually do, but not guaranteed historically).
       2. Has `.size` property (Object needs `Object.keys(obj).length`).
       3. Better performance for frequent additions/removals.
     - *Methods*: `.set(key, val)`, `.get(key)`, `.has(key)`, `.delete(key)`.

  3. REGEX (Regular Expressions):
     - Patterns used to match character combinations in strings.
     - *Syntax*: `/pattern/flags`.
     - *Flags*:
       - `g`: Global (find all matches, not just first).
       - `i`: Case Insensitive.
       - `m`: Multiline.
     - *Methods*:
       - `regex.test(str)`: Returns Boolean (True/False).
       - `str.match(regex)`: Returns Array of matches.

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
