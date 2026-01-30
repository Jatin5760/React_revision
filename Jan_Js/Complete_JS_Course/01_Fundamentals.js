/*
================================================================================
  JAVASCRIPT FUNDAMENTALS: VARIABLES, DATA TYPES & OPERATORS
================================================================================

  THEORY:
  
  1. VARIABLES (The Container for Data):
     - `var`: The old way (pre-ES6). It is "Function Scoped" (available within whole function even if declared in an if-block).
       It is "Hoisted" (moved to top) and initialized as `undefined`. This often causes bugs.
     - `let`: The modern way. "Block Scoped" (only exists inside the {} it was created in). 
       It is hoisted but stays in a "Temporal Dead Zone" (TDZ). 
       *TDZ Explained*: The period from the start of the block until the variable is defined. Accessing it early throws a `ReferenceError`.
       Can be reassigned.

     - `const`: Also "Block Scoped". Must be initialized immediately. Cannot be reassigned. 
       Note: If `const` holds an object/array, the *contents* can typically still be changed (mutation), but the *variables reference* cannot.
  
  2. DATA TYPES (The Kind of Data):
     - Primitive Types (Stored by Value in Stack):
       1. String ("Hello")
       2. Number (123, 1.5)
       3. Boolean (true/false)
       4. Null (Intentional absence of value)
       5. Undefined (Variable declared but not assigned)
       6. Symbol (Unique identifier)
       7. BigInt (Large integers > 2^53 - 1)

     - Reference Types (Stored by Reference in Heap):
       1. Object ({ key: value })
       2. Array ([1, 2, 3])
       3. Function
       *Key Difference:* Primitives are copied by value (independent copies). Objects are copied by reference (pointing to same memory location).

  3. OPERATORS:
     - Arithmetic: +, -, *, /, % (Modulus/Remainder), ** (Exponentiation/Power).
     - Assignment: = (assign), += (add & assign), -= (subtract & assign).
     - Comparison: 
       - `==` (Loose Equality): Checks value only. Performs "Type Coercion" (e.g., "5" == 5 is true).
       - `===` (Strict Equality): Checks value AND type. Recommended usage. (e.g., "5" === 5 is false).
       - `!=` vs `!==` (Loose vs Strict Inequality).
     - Logical: 
       - `&&` (AND): Returns true if BOTH are true. Returns first falsy value or last truthy value.
       - `||` (OR): Returns true if AT LEAST one is true. Returns first truthy value.
       - `!` (NOT): Flips the boolean value.
     - Typeof: Operator to check data type (e.g., `typeof "Hello"` -> "string").

  4. TYPE CONVERSION:
     - Implicit (Coercion): JS engine automatically converts types to make an operation work.
       Example: "5" + 2 results in "52" (String concatenation wins).
       Example: "5" - 2 results in 3 (String converted to Number).
     - Explicit (Type Casting): Manually converting types.
       String(123), Number("123"), Boolean(1), parseInt("10.5"), parseFloat("10.5").

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
const userId = 101
let userEmail = "test@test.com"
// userId = 102
userEmail = "admin@test.com"
console.log(`My userId is ${userId} and userEmail is ${userEmail}`);



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
let a = 20;
let b = null;
let c = 'ayush';
let d = Symbol("my name is jatin sharma");
let e = true;
let f = BigInt('576');
let g = undefined;

console.table([typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f) , typeof(g)]);





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
