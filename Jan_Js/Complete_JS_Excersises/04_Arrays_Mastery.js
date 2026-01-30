/*
================================================================================
  JAVASCRIPT ARRAYS MASTERY
================================================================================

  THEORY:
  Arrays are ordered collections of items. In JS, they can hold mixed types and are dynamic (autoresize).
  They are Objects under the hood, with integer keys.

  KEY METHODS CHEATSHEET:
  - Add/Remove End: `push(val)`, `pop()`
  - Add/Remove Start: `unshift(val)`, `shift()`
  - Subarray: `slice(start, end)` (Copy), `splice(start, count, insert)` (Mutate)
  - Search: `indexOf(val)`, `includes(val)`, `find(cb)`, `findIndex(cb)`
  - Transform: `map(cb)`, `filter(cb)`, `reduce(cb, init)`
  - Order: `sort(cb)`, `reverse()`
  - String: `join(separator)`

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
