/*
================================================================================
  JAVASCRIPT FUNDAMENTALS: VARIABLES, DATA TYPES & OPERATORS
================================================================================

  THEORY:
  
  1. VARIABLES:
     - `var`: Function scoped, can be re-declared, hoisted (avoid using in modern JS).
     - `let`: Block scoped, cannot be re-declared in same scope, can be updated.
     - `const`: Block scoped, cannot be re-declared or updated (immutable reference).
  
  2. DATA TYPES:
     - Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
       (Stored directly in the stack)
     - Non-Primitive (Reference): Object, Array, Function.
       (Stored in heap, variable holds a reference/address)

  3. OPERATORS:
     - Arithmetic: +, -, *, /, %, ** (exponent)
     - Assignment: =, +=, -=
     - Comparison: == (loose equality, type coercion), === (strict equality), !=, !==, >, <
     - Logical: && (AND), || (OR), ! (NOT)
     - Typeof: Returns the type of a variable.

  4. TYPE CONVERSION:
     - Implicit (Coercion): JS automatically changes types ("5" + 2 = "52").
     - Explicit: Number(), String(), Boolean().

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 01 FUNDAMENTALS EXERCISES ---");

// ------------------------------------------
// 1. VARIABLES (let vs const)
// ------------------------------------------
/*
  TODO:
  1. Declare a variable `userId` using `const` and set it to 101.
  2. Declare a variable `userEmail` using `let` and set it to "test@test.com".
  3. Try to reassign `userId` to 102 (It should throw an error, so comment it out after testing).
  4. Update `userEmail` to "admin@test.com".
  5. Log both variables.
*/

// YOUR CODE HERE:



// ------------------------------------------
// 2. DATA TYPES & TYPEOF
// ------------------------------------------
/*
  TODO:
  1. Create variables for a String, Number, Boolean, Null, and Undefined.
  2. Log the `typeof` for each variable.
  NOTE: Notice what `typeof null` returns (it's a known JS bug/feature).
*/

// YOUR CODE HERE:



// ------------------------------------------
// 3. OPERATORS & CONVERSION
// ------------------------------------------
/*
  TODO:
  1. Create two string variables: "10" and "20".
  2. Add them together and log the result (concatenation).
  3. Convert them to numbers explicitly using `Number()` and add them. Log the result.
  4. Use the `+` unary operator to convert them (e.g., +str) and subtract them.
  5. Check if "5" == 5 and "5" === 5. Log the booleans.
*/

// YOUR CODE HERE:



// ------------------------------------------
// 4. TRUTHY & FALSY VALUES
// ------------------------------------------
/*
  THEORY RECAP:
  Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN.
  Everything else is Truthy.
*/

/*
  TODO:
  1. Create a variable `userPoints` equal to 0.
  2. Write an `if` condition: if (userPoints) log "Has points", else log "No points".
     (Observe how 0 is treated as false).
  3. Change `userPoints` to "0" (string) and run the check again.
*/

// YOUR CODE HERE:
