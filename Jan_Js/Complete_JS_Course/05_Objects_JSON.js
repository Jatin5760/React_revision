/*
================================================================================
  OBJECTS, JSON & DESTRUCTURING
================================================================================

  THEORY:
  
  1. OBJECTS: The core data structure. Unordered collection of Key-Value pairs.
     - *Keys*: Are always Strings or Symbols. (e.g., `obj[1]` actually treats 1 as "1").
     - *Values*: Can be anything (Primitives, Arrays, Functions, Other Objects).
     - *Access*: Dot notation `obj.key` (cleaner) vs Bracket notation `obj["key"]` (dynamic, allows spaces/vars).

  2. JSON (JavaScript Object Notation):
     - The universal format for API data transfer.
     - `JSON.stringify(obj)`: Converts JS Object -> JSON String.
       *Warning*: It ignores functions and `undefined` values. It cannot handle circular references.
     - `JSON.parse(string)`: Converts JSON String -> JS Object.
       *Use Case*: Deep cloning objects (simple hack: `JSON.parse(JSON.stringify(obj))`).

  3. DESTRUCTURING (ES6):
     - Unpacking values from arrays or properties from objects into distinct variables.
     - *Syntax*: `const { name, age } = user;`.
     - *Renaming*: `const { name: userName } = user;`.
     - *Defaults*: `const { role = "guest" } = user;` (Uses "guest" if role is undefined).

  4. SPREAD OPERATOR (...) & COPYING:
     - Merging: `const combined = { ...obj1, ...obj2 }` (Right-side props overwrite left-side duplicates).
     - Cloning: `const copy = { ...original }`.
     - *Critical Note*: This creates a SHALLOW COPY. Can copy primitive props, but nested objects are still shared references.
       Modifying `copy.nested.x` WILL affect `original.nested.x`.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 05 OBJECTS & JSON ---");

// ------------------------------------------
// 1. OBJECT CREATION & ACCESS
// ------------------------------------------
/*
  TODO:
  1. Create `student` object with: name ("John"), age (20), grades ([80, 90]).
  2. Access name using dot notation.
  3. Access age using bracket notation `["age"]`.
  4. Add a new property `city` = "New York".
  5. Delete the `grades` property.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. OBJECT METHODS (Keys, Values, Entries)
// ------------------------------------------
/*
  TODO:
  1. Create `book` = { title: "JS Guide", author: "MDN", year: 2024 };
  2. Log `Object.keys(book)` -> Should get ["title", "author", "year"].
  3. Log `Object.values(book)`.
  4. Log `Object.entries(book)`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. DESTRUCTURING (Very Common in React)
// ------------------------------------------
/*
  TODO:
  1. From the `book` object above, destructure `title` and `author` into variables.
  2. Destructure `year` but rename the variable to `publishYear`.
  3. Log all variables.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. SPREAD OPERATOR (Merging & Cloning)
// ------------------------------------------
/*
  TODO:
  1. Create `userBasic` = { name: "Alice", email: "alice@test.com" };
  2. Create `userSettings` = { theme: "Dark", notif: true };
  3. Create `fullProfile` by merging both using spread `...`.
  4. Create a Shallow Copy of `fullProfile` called `profileCopy` and override `theme` to "Light".
*/

// YOUR CODE HERE:




// ------------------------------------------
// 5. JSON
// ------------------------------------------
/*
  TODO:
  1. Create `data` object = { id: 1, status: "active" };
  2. Convert to JSON string using `JSON.stringify()`. Log it.
  3. Parse the string back to an object using `JSON.parse()`. Log it.
*/

// YOUR CODE HERE:
