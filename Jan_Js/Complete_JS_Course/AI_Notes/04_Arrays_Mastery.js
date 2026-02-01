/*
================================================================================
  JAVASCRIPT ARRAYS MASTERY
================================================================================

  THEORY:
  Arrays are dynamic lists that can hold any data type. They are crucial because most frontend data (like lists of products/users) comes as Arrays.

  KEY METHODS CHEATSHEET & BEHAVIOR:
  
  1. ADD/REMOVE (Modifies Original Array):
     - `push(val)`: Adds to END. Returns new length.
     - `pop()`: Removes from END. Returns removed item.
     - `unshift(val)`: Adds to START. Returns new length. (Slower than push, reindexes all).
     - `shift()`: Removes from START. Returns removed item.

  2. SLICE vs SPLICE (Interview Favorite):
     - `slice(start, end)`: Pure function. Returns a COPY of a section. END index is excluded. Does NOT change original array.
     - `splice(start, count, insert)`: Impure function. MUTATES original array. Removes items and/or adds new ones at specific index.

  3. ITERATION & TRANSFORMATION (The Big Three):
     - `map(callback)`: Transforms EACH item. Returns a NEW array of same length. 
       *Use when:* You want to convert data (e.g., Object -> String, or Price -> Discounted Price).
     - `filter(callback)`: Checks condition for EACH item. Returns a NEW array with ONLY items that pass (return true).
       *Use when:* You want to remove items (e.g., Delete a todo, remove out-of-stock items).
     - `reduce(callback, initialVal)`: Accumulates all items into a SINGLE value (number, object, or another array).
       *Use when:* Summing totals, grouping data, or flattening lists.

  4. SEARCHING:
     - `find(callback)`: Returns the FIRST item object that matches condition (or undefined).
     - `findIndex(callback)`: Returns INDEX of first match (or -1).
     - `includes(val)`: Returns true/false (Simple equality check).
     - `indexOf(val)`: Returns index (or -1).

  5. SORTING:
     - `sort()`: Sorts IN PLACE. By default, converts to strings (so 100 comes before 2).
       *Fix:* Always provide compare function `(a,b) => a - b` for numbers.
     - `reverse()`: Reverses IN PLACE.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 04 ARRAYS MASTERY ---");

// ------------------------------------------
// 1. BASIC MUTATION (Push, Pop, Shift, Splice)
// ------------------------------------------
/*
  TODO:
  1. Create an array `cart` = ["Apple", "Banana"].
  2. Add "Orange" to the end (`push`).
  3. Add "Mango" to the start (`unshift`).
  4. Remove the last item (`pop`) and store in variable `removedItem`.
  5. Use `splice` to remove "Banana" (index 1 usually) and allow "Grapes" to take its place.
  6. Log the final `cart`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. SEARCHING & SLICING
// ------------------------------------------
/*
  TODO:
  1. Array `nums` = [10, 20, 30, 40, 50].
  2. Check if it `includes` 30 (Log result).
  3. Find the `indexOf` 40 (Log result).
  4. Create a new array `subArr` using `slice` containing only [20, 30].
     (Remember: slice end index is exclusive).
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. ITERATION METHODS (The Holy Trinity: Map, Filter, Reduce)
// ------------------------------------------
/*
  These are fundamental for React and modern JS applications.
*/

// A. MAP (Transform elements)
/*
  TODO:
  1. Array `prices` = [100, 200, 300].
  2. Create `salePrices` using `.map()` that applies a 10% discount (element * 0.9).
  3. Log both arrays.
*/

// YOUR CODE HERE:




// B. FILTER (Select elements)
/*
  TODO:
  1. Array `temps` = [72, 85, 90, 60, 100].
  2. Create `hotDays` using `.filter()` keeping only temps >= 80.
  3. Log result.
*/

// YOUR CODE HERE:




// C. REDUCE (Accumulate into single value)
/*
  TODO:
  1. Array `cartItems` = [ {price: 10}, {price: 20}, {price: 30} ];
  2. Calculate total price using `.reduce()`.
     - Initial value should be 0.
     - Callback: (total, item) => total + item.price.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 4. FIND & FINDINDEX
// ------------------------------------------
/*
  TODO:
  1. Array `users` = [ {id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"} ];
  2. Find the object where id === 2 using `.find()`.
  3. Find the index of the object where name === "C" using `.findIndex()`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 5. CHAINING METHODS (Real World Example)
// ------------------------------------------
/*
  TODO:
  You have a list of products.
  1. Filter out products that are "out of stock".
  2. Map them to create an array of strings: "Product Name ($Price)".
  
  Data set:
  const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 50, inStock: false },
    { name: "Keyboard", price: 100, inStock: true }
  ];
*/

// YOUR CODE HERE:
