/*
================================================================================
  CONTROL FLOW & LOOPS
================================================================================

  THEORY:
  
  1. CONDITIONALS (Decision Making):
     - `if (condition) { ... } else { ... }`: The building block of logic. Runs code block only if condition is true.
     - `switch(value) { case x: ... break; }`: Cleaner alternative to many if-else if statements when checking the SAME variable against specific values (discrete checking). Uses strict equality (===) internally.
     - Ternary Operator (`cond ? trueVal : falseVal`): Inline if-else. Great for assigning values based on condition.
     - Nullish Coalescing (`??`): Returns the right-side value strictly if the left-side is `null` or `undefined`.
       *Difference from `||`*: `||` falls back on ANY falsy value (0, "", false). `??` falls back ONLY on null/undefined.

  2. LOOPS (Repetition):
     - `for (init; condition; step) { ... }`: The classic loop. You control the start, stop, and step counting manually.
     - `while (condition) { ... }`: Loop that runs AS LONG AS condition is true. Good when number of iterations is unknown.
     - `do { ... } while (condition)`: Similar to while, but guarantees code runs AT LEAST ONCE before checking condition.
     - `for (const item of array)`: Modern, readable loop for "Iterables" (Arrays, Strings, NodeLists). You get the *Value* directly.
     - `for (const key in object)`: Loop specific for Objects. You get the *Key* (property name). *Note: Using this on arrays gives index strings, not values (usually avoided for arrays).*
     
  3. LOOP CONTROL:
     - `break`: Immediately terminates the loop and moves to code after it.
     - `continue`: Skips the *current* iteration and jumps to the next one.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 02 CONTROL FLOW & LOOPS ---");

// ------------------------------------------
// 1. CONDITIONALS (If, Switch, Ternary)
// ------------------------------------------
/*
  TODO:
  1. Create a variable `role` = "admin".
  2. Use a Switch statement to log:
     - "Full Access" if role is "admin"
     - "Limited Access" if role is "editor"
     - "No Access" for default.
     
  3. Create variable `isLoggedIn` = true.
  4. Use a Ternary Operator to construct a message: "Welcome Back" if true, "Please Login" if false.
     Log the message.
*/

// YOUR CODE HERE:
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Limited Access");
  default:
    console.log("No Access");
    
    break;
}


const isLoggedIn = true
isLoggedIn ? console.log("Welcome Back") : console.log("Please Login");



// ------------------------------------------
// 2. NULLISH COALESCING vs OR
// ------------------------------------------
/*
  TODO:
  1. Create `count` = 0.
  2. Log `count || 10`. (Should be 10, because 0 is falsy).
  3. Log `count ?? 10`. (Should be 0, because 0 is NOT null/undefined).
  This distinction is crucial for default values in apps!
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. LOOPS (For, While)
// ------------------------------------------
/*
  TODO:
  1. Write a `for` loop to print numbers from 1 to 5.
  2. Write a `while` loop that prints numbers from 5 down to 1.
*/

// YOUR CODE HERE:
for(let i = 0; i < 5; i++){
  console.log(i+1);
  
}
console.log('\n');


let i = 6
while(i--){
  if(i == 0){
    break;
  }
  console.log(i);
  
}
console.log('\n');

// ------------------------------------------
// 4. MODERN ITERATION (For...of)
// ------------------------------------------
/*
  TODO:
  1. Create an array `skills` = ["HTML", "CSS", "JS", "React"].
  2. Use `for...of` to log each skill. 
     (This is cleaner than a standard for loop for arrays).
     
  3. Create a string `greeting` = "Hello".
  4. Use `for...of` to log each character.
*/

// YOUR CODE HERE:

let arr = ["HTML", "CSS", "JS", "REACT"]

for(lang of arr){
  console.log(lang);
}

console.log('\n');


let str = "Hello"
for(s of str){
  console.log(s);
  
}
console.log('\n');


// ------------------------------------------
// 5. BREAK & CONTINUE
// ------------------------------------------
/*
  TODO:
  1. Loop from 1 to 10.
  2. If number is 5, use `continue` (skip printing).
  3. If number is 8, use `break` (stop loop).
  4. Log the numbers.
*/

// YOUR CODE HERE:
for(let i = 1; i <= 10; i++){
  if(i == 5){
    continue;
  }
  else if(i == 8){
    break;
  }
  console.log(i);
}