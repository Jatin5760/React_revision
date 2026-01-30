/*
================================================================================
  OBJECTS, JSON & DESTRUCTURING
================================================================================

  THEORY:
  1. OBJECTS: Key-value pairs. Keys are strings (or Symbols), values can be anything.
  2. JSON (JavaScript Object Notation): Standard text format for data interchange.
     - `JSON.stringify(obj)`: Object -> String.
     - `JSON.parse(string)`: String -> Object.
  3. DESTRUCTURING: Extracting values from objects/arrays into distinct variables.
  4. SPREAD (`...`): Expanding an object/array into individual elements/props.

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
