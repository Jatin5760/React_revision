# JavaScript Exercises: A to Z - Complete Guide

A comprehensive set of exercises covering all JavaScript concepts from basic to advanced.

---

## 1. VARIABLES & DATA TYPES

### Exercise 1.1: Variable Declaration
```javascript
// TODO: Declare variables using var, let, const
// - Create a variable 'name' with value "John" (const)
// - Create a variable 'age' with value 25 (let)
// - Create a variable 'isStudent' with value true (var)
// - Log all three to console
```

### Exercise 1.2: Data Types Identification
```javascript
// TODO: Check the data type of each value and log it
let value1 = 42;
let value2 = "hello";
let value3 = true;
let value4 = undefined;
let value5 = null;
let value6 = { name: "Ali" };
let value7 = [1, 2, 3];
let value8 = Symbol('id');
let value9 = 123n;

// Log: typeof value1, typeof value2, etc.
```

### Exercise 1.3: Type Conversion
```javascript
// TODO: Convert strings to numbers and vice versa
let str = "123";
let num = 456;

// Convert str to number
// Convert num to string
// Try parsing "45abc" as integer
// Convert "true" string to boolean
```

---

## 2. OPERATORS

### Exercise 2.1: Arithmetic Operations
```javascript
// TODO: Calculate the following without using calculator
let a = 20;
let b = 5;

// Addition, Subtraction, Multiplication, Division, Modulus, Exponentiation
// Log all results
```

### Exercise 2.2: Comparison Operators
```javascript
// TODO: Compare values and log true/false
let x = 10;
let y = "10";

// x == y (loose equality)
// x === y (strict equality)
// x != y
// x !== y
// x > 5
// x <= 10
```

### Exercise 2.3: Logical Operators
```javascript
// TODO: Use AND (&&), OR (||), NOT (!) operators
let isRaining = true;
let hasUmbrella = false;

// Can I go outside? (should be false - raining and no umbrella)
// Should I stay home? (should be true - raining)
// Is it not raining? (should be false)
```

### Exercise 2.4: Assignment & Compound Operators
```javascript
// TODO: Use +=, -=, *=, /=, etc.
let count = 10;

// Add 5 to count using +=
// Subtract 3 using -=
// Multiply by 2 using *=
// Divide by 4 using /=
// Log the final result
```

### Exercise 2.5: Ternary Operator
```javascript
// TODO: Use ternary operator (condition ? true : false)
let age = 18;

// Create a variable 'status' that says "Adult" if age >= 18, else "Minor"
// Log the status
```

---

## 3. CONTROL FLOW - IF/ELSE

### Exercise 3.1: Simple If-Else
```javascript
// TODO: Check if a number is positive, negative, or zero
let number = -5;

// If number > 0: log "Positive"
// Else if number < 0: log "Negative"
// Else: log "Zero"
```

### Exercise 3.2: Multiple Conditions
```javascript
// TODO: Grade calculator
let marks = 85;

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
// Log the grade
```

### Exercise 3.3: Nested If-Else
```javascript
// TODO: Check if user can drive
let age = 16;
let hasLicense = true;

// User can drive only if age >= 18 AND hasLicense is true
// Log appropriate message
```

---

## 4. SWITCH STATEMENT

### Exercise 4.1: Simple Switch
```javascript
// TODO: Day of week selector
let day = 3; // 1-7

// 1: Monday, 2: Tuesday, 3: Wednesday, etc.
// Use switch statement
// Log the day name
```

### Exercise 4.2: Switch with Default
```javascript
// TODO: Fruit color selector
let fruit = "apple";

// "apple": "red"
// "banana": "yellow"
// "grape": "purple"
// Default: "unknown fruit"
// Use switch statement
```

---

## 5. LOOPS

### Exercise 5.1: For Loop
```javascript
// TODO: Print numbers from 1 to 10
// Use for loop

// TODO: Print even numbers from 2 to 20
// Use for loop

// TODO: Print numbers from 10 to 1 (reverse)
// Use for loop
```

### Exercise 5.2: While Loop
```javascript
// TODO: Print numbers 1 to 5 using while loop

// TODO: Keep asking user to guess a number until correct
// (Simulate with a counter instead of user input)
```

### Exercise 5.3: Do-While Loop
```javascript
// TODO: Print numbers 1 to 5 using do-while loop

// TODO: Create a simple menu that runs at least once
// (Simulate with counter)
```

### Exercise 5.4: For-In Loop
```javascript
// TODO: Loop through object properties
let person = { name: "Ali", age: 25, city: "Karachi" };

// Print all keys and values using for-in
```

### Exercise 5.5: For-Of Loop
```javascript
// TODO: Loop through array elements
let fruits = ["apple", "banana", "mango", "orange"];

// Print each fruit using for-of
```

### Exercise 5.6: Break & Continue
```javascript
// TODO: Print 1 to 10, but break when you reach 6
// Use for loop with break

// TODO: Print 1 to 10, but skip 5
// Use for loop with continue
```

---

## 6. FUNCTIONS

### Exercise 6.1: Function Declaration
```javascript
// TODO: Create a function that takes two numbers and returns their sum
// Call it with arguments 10 and 20
// Log the result
```

### Exercise 6.2: Function Expression
```javascript
// TODO: Create a function expression that multiplies two numbers
// Call it with arguments 5 and 4
// Log the result
```

### Exercise 6.3: Arrow Functions
```javascript
// TODO: Create arrow functions for:
// - Add two numbers
// - Check if number is even
// - Return the square of a number
// Test each one
```

### Exercise 6.4: Default Parameters
```javascript
// TODO: Create a function with default parameters
// Function: greet(name = "Guest", greeting = "Hello")
// Call it with: greet(), greet("Ali"), greet("Ali", "Hi")
```

### Exercise 6.5: Return Multiple Values
```javascript
// TODO: Create a function that returns multiple values using array/object
// Function should return: name, age, email
// Destructure the result and log
```

### Exercise 6.6: Function Scope
```javascript
// TODO: Create a global variable 'x = 10'
// Create a function that has local variable 'x = 20'
// Log x inside function (should be 20)
// Log x outside function (should be 10)
```

---

## 7. ARRAYS

### Exercise 7.1: Array Basics
```javascript
// TODO: Create an array of 5 numbers [1, 2, 3, 4, 5]
// - Access the first element
// - Access the last element
// - Change the 3rd element to 30
// - Log the array
```

### Exercise 7.2: Array Methods - Add/Remove
```javascript
// TODO: Create an array ['a', 'b', 'c']
// - Add 'd' at the end using push()
// - Remove 'a' from the beginning using shift()
// - Add 'x' at the beginning using unshift()
// - Remove 'c' using pop()
// - Log the final array
```

### Exercise 7.3: Array Methods - Search
```javascript
// TODO: Create array [1, 2, 3, 4, 5, 2]
// - Find index of 3
// - Check if array includes 4
// - Find index of last occurrence of 2
// - Get lastIndexOf(2)
```

### Exercise 7.4: Array Methods - Slice & Splice
```javascript
// TODO: Create array ['a', 'b', 'c', 'd', 'e']
// - Use slice(1, 3) to get 'b', 'c'
// - Use splice(2, 1, 'x') to replace 'c' with 'x'
// - Log results
```

### Exercise 7.5: Array Methods - Map, Filter, Reduce
```javascript
// TODO: Create array [1, 2, 3, 4, 5]
// - Use map() to double each number: [2, 4, 6, 8, 10]
// - Use filter() to get even numbers: [2, 4]
// - Use reduce() to sum all: 15
```

### Exercise 7.6: Array Methods - Find & Every & Some
```javascript
// TODO: Create array [10, 20, 30, 40, 50]
// - Use find() to get first number > 25
// - Use findIndex() to get index of first number > 25
// - Use every() to check if all > 5
// - Use some() to check if any > 40
```

### Exercise 7.7: Array Methods - Sort & Reverse
```javascript
// TODO: Create array [3, 1, 4, 1, 5, 9]
// - Use reverse() to reverse it
// - Use sort() to sort numbers in ascending order
// - Try sorting strings too
```

---

## 8. OBJECTS

### Exercise 8.1: Object Basics
```javascript
// TODO: Create an object 'student' with properties: name, age, grade
// - Access each property using dot notation
// - Access each property using bracket notation
// - Log the object
```

### Exercise 8.2: Adding & Modifying Properties
```javascript
// TODO: Create an object 'car' with brand: "Toyota", color: "red"
// - Add a new property 'year: 2020'
// - Modify the color to "blue"
// - Delete the color property using delete
// - Log the final object
```

### Exercise 8.3: Methods in Objects
```javascript
// TODO: Create an object 'calculator' with methods:
// - add(a, b) returns a + b
// - subtract(a, b) returns a - b
// - multiply(a, b) returns a * b
// Call each method and log results
```

### Exercise 8.4: Object Methods - Keys, Values, Entries
```javascript
// TODO: Create object { name: "Ali", age: 25, city: "Karachi" }
// - Get all keys using Object.keys()
// - Get all values using Object.values()
// - Get key-value pairs using Object.entries()
// Log each
```

### Exercise 8.5: Object Method - Assign
```javascript
// TODO: Create object1 = { a: 1, b: 2 }
// Create object2 = { c: 3, d: 4 }
// Use Object.assign() to merge them into a new object
// Log the merged object
```

### Exercise 8.6: Nested Objects
```javascript
// TODO: Create a student object with nested address object
// student = { name: "Ali", address: { city: "Karachi", country: "Pakistan" } }
// Access nested properties and log
```

---

## 9. STRINGS

### Exercise 9.1: String Basics
```javascript
// TODO: Create string "Hello World"
// - Get length
// - Convert to uppercase
// - Convert to lowercase
// - Get character at index 0
// - Get character code at index 0
```

### Exercise 9.2: String Methods - Search
```javascript
// TODO: Create string "Hello World Hello"
// - Use indexOf() to find first "Hello"
// - Use lastIndexOf() to find last "Hello"
// - Use includes() to check if it contains "World"
// - Use startsWith() to check if it starts with "Hello"
// - Use endsWith() to check if it ends with "Hello"
```

### Exercise 9.3: String Methods - Extract
```javascript
// TODO: Create string "JavaScript"
// - Use substring(0, 4) to get "Java"
// - Use slice(4) to get "Script"
// - Use substr(0, 4) to get "Java"
// - Compare results
```

### Exercise 9.4: String Methods - Replace & Split
```javascript
// TODO: Create string "Hello World"
// - Use replace() to change "World" to "JavaScript"
// - Use replaceAll() to replace "l" with "L"
// - Use split() to split by space
// - Log results
```

### Exercise 9.5: String Methods - Trim & Repeat
```javascript
// TODO: Create string "  Hello  "
// - Use trim() to remove spaces
// - Use trimStart() and trimEnd()
// Create string "Hi" and repeat it 5 times using repeat()
```

### Exercise 9.6: String Concatenation
```javascript
// TODO: Create string concatenation in 3 ways:
// - Using + operator: "Hello" + " " + "World"
// - Using concat(): "Hello".concat(" ", "World")
// - Using template literals: `Hello World`
```

---

## 10. TEMPLATE LITERALS

### Exercise 10.1: Basic Template Literals
```javascript
// TODO: Use template literals with variables
let firstName = "Ali";
let lastName = "Khan";
// Create: `Name: Ali Khan`
// Log it
```

### Exercise 10.2: Template Literals with Expressions
```javascript
// TODO: Create template literal with expressions
let price = 500;
let quantity = 3;
// Create: `Total: ${price * quantity}`
// Log it
```

### Exercise 10.3: Multi-line Template Literals
```javascript
// TODO: Create multi-line string using template literals
// Print address on multiple lines:
// Ali
// Karachi
// Pakistan
```

---

## 11. CLOSURES

### Exercise 11.1: Basic Closure
```javascript
// TODO: Create a closure
// Function outer() returns inner function
// Inner function uses variable from outer function
// Call outer()() and log the result
```

### Exercise 11.2: Counter Closure
```javascript
// TODO: Create a counter function using closure
// Each call to counter() should increment and return count
// Start from 0 and increment by 1
// Test with multiple calls
```

### Exercise 11.3: Private Variables with Closure
```javascript
// TODO: Create a bank account with closure
// Only expose deposit() and withdraw() methods
// Balance should be private (not accessible directly)
// Test with deposit and withdraw operations
```

---

## 12. CALLBACKS

### Exercise 12.1: Simple Callback
```javascript
// TODO: Create a function that takes a callback
// Function: processData(data, callback)
// Callback should print the data
// Call it with a number and a callback function
```

### Exercise 12.2: Callback with Calculation
```javascript
// TODO: Create calculator function with callback
// Function: calculate(a, b, callback)
// Callback receives the result
// Create add, subtract, multiply callbacks
// Test each one
```

### Exercise 12.3: Array Callback Methods
```javascript
// TODO: Use array methods that take callbacks
// Array: [1, 2, 3, 4, 5]
// Use forEach with callback to print each number
// Use map with callback to double each number
// Log results
```

---

## 13. PROMISES

### Exercise 13.1: Creating Promises
```javascript
// TODO: Create a promise that resolves after 2 seconds
// Promise should resolve with a message "Success!"
// Use .then() to handle the resolved value
// Log the result
```

### Exercise 13.2: Promise Rejection
```javascript
// TODO: Create a promise that rejects after 1 second
// Promise should reject with a message "Error occurred!"
// Use .catch() to handle the error
// Log the error
```

### Exercise 13.3: Promise Chaining
```javascript
// TODO: Create a chain of promises
// Promise 1: resolves with number 5
// Promise 2: takes the value, multiplies by 2, resolves with 10
// Promise 3: takes the value, adds 5, resolves with 15
// Use .then() chaining
```

### Exercise 13.4: Promise.all()
```javascript
// TODO: Create 3 promises that resolve with different values
// Use Promise.all() to wait for all to resolve
// Log the array of results
```

### Exercise 13.5: Promise.race()
```javascript
// TODO: Create 2 promises with different delays
// Use Promise.race() to see which resolves first
// Log the first resolved value
```

---

## 14. ASYNC/AWAIT

### Exercise 14.1: Basic Async Function
```javascript
// TODO: Create an async function that returns "Hello"
// Call it and log the returned promise
// Use .then() to get the value
```

### Exercise 14.2: Async with Await
```javascript
// TODO: Create an async function
// Inside, await a promise that resolves with "Success!"
// Log the awaited value
// Call the function
```

### Exercise 14.3: Handling Errors with Async/Await
```javascript
// TODO: Create an async function with try-catch
// Create a promise that rejects
// Try to await it and catch the error
// Log the caught error
```

### Exercise 14.4: Multiple Awaits
```javascript
// TODO: Create an async function with multiple awaits
// First promise resolves with 10
// Second promise resolves with 20
// Add them and return the sum
// Call and log the result
```

---

## 15. DESTRUCTURING

### Exercise 15.1: Array Destructuring
```javascript
// TODO: Destructure array [10, 20, 30, 40]
// Get first and second values in variables a and b
// Get third and fourth values skipping second using rest

// const [a, , c] = [10, 20, 30, 40];
// Log a and c
```

### Exercise 15.2: Object Destructuring
```javascript
// TODO: Destructure object { name: "Ali", age: 25, city: "Karachi" }
// Get name and age in variables
// Rename city to location
// Log all three
```

### Exercise 15.3: Nested Destructuring
```javascript
// TODO: Destructure nested object
// student = { name: "Ali", address: { city: "Karachi", country: "Pakistan" } }
// Get name and city
// Log both
```

### Exercise 15.4: Function Parameter Destructuring
```javascript
// TODO: Create function with destructured parameters
// Function takes an object { x: number, y: number }
// Function should return x + y
// Call it with { x: 5, y: 10 }
```

---

## 16. SPREAD OPERATOR

### Exercise 16.1: Spread with Arrays
```javascript
// TODO: Use spread operator with arrays
// Array 1: [1, 2, 3]
// Array 2: [4, 5, 6]
// Combine into one array using spread: [1, 2, 3, 4, 5, 6]
// Log result
```

### Exercise 16.2: Spread with Objects
```javascript
// TODO: Use spread operator with objects
// Object 1: { a: 1, b: 2 }
// Object 2: { c: 3, d: 4 }
// Merge into one object using spread
// Log result
```

### Exercise 16.3: Copy Arrays and Objects
```javascript
// TODO: Use spread to create shallow copy
// Original array: [1, 2, 3]
// Copy using spread and modify copy
// Verify original is unchanged
// Do same with object
```

### Exercise 16.4: Spread in Function Arguments
```javascript
// TODO: Create function sum(a, b, c)
// Create array [10, 20, 30]
// Call sum() using spread operator to pass array elements
// Log the result
```

---

## 17. REST PARAMETERS

### Exercise 17.1: Basic Rest Parameters
```javascript
// TODO: Create function with rest parameters
// Function sum(...numbers)
// Should accept any number of arguments
// Return the sum of all arguments
// Call with sum(1, 2, 3, 4, 5)
```

### Exercise 17.2: Rest with Regular Parameters
```javascript
// TODO: Create function with regular and rest parameters
// Function: describe(name, ...hobbies)
// Log name and all hobbies
// Call with ("Ali", "coding", "reading", "gaming")
```

---

## 18. HIGHER ORDER FUNCTIONS

### Exercise 18.1: Function as Argument
```javascript
// TODO: Create a function that takes another function as argument
// Function: applyTwice(func, value)
// applyTwice should call func twice with the value
// Example: applyTwice(x => x * 2, 5) should return 20
```

### Exercise 18.2: Function Returning Function
```javascript
// TODO: Create function that returns another function
// Function: multiplier(factor)
// Returns a function that multiplies its argument by factor
// Example: const double = multiplier(2); double(5) = 10
```

### Exercise 18.3: Currying
```javascript
// TODO: Create a curried function
// Function: add(a)(b) returns a + b
// Function: multiply(a)(b) returns a * b
// Test each one
```

---

## 19. CLASSES & OOP

### Exercise 19.1: Class Basics
```javascript
// TODO: Create a class 'Person' with:
// - Constructor with name and age parameters
// - Method: greet() that logs "Hello, I'm [name]"
// Create instance and call greet()
```

### Exercise 19.2: Class with Getters & Setters
```javascript
// TODO: Create a class 'Circle' with:
// - Private radius
// - Getter: area (returns π * r²)
// - Setter: radius (validates radius > 0)
// Test getters and setters
```

### Exercise 19.3: Inheritance
```javascript
// TODO: Create class 'Animal' with:
// - Constructor with name
// - Method: speak()
// Create class 'Dog' that extends Animal
// Override speak() to log "Woof!"
// Test both
```

### Exercise 19.4: Static Methods
```javascript
// TODO: Create class 'Math2' with:
// - Static method: add(a, b)
// - Static method: subtract(a, b)
// Call static methods without creating instance
```

### Exercise 19.5: Class Encapsulation
```javascript
// TODO: Create a class 'BankAccount' with:
// - Private balance
// - Public deposit(amount)
// - Public withdraw(amount)
// - Public getBalance()
// Test all methods
```

---

## 20. REGULAR EXPRESSIONS

### Exercise 20.1: Email Validation
```javascript
// TODO: Create regex to validate email format
// Pattern: something@something.com
// Test with valid and invalid emails
// Use .test() method
```

### Exercise 20.2: Phone Number Validation
```javascript
// TODO: Create regex to validate phone number
// Pattern: 3-digit area code, 3-digit exchange, 4-digit line
// Example: 123-456-7890
// Test with valid and invalid numbers
```

### Exercise 20.3: String Matching
```javascript
// TODO: Create regex to find all words starting with 'a'
// String: "apple ant banana apricot orange"
// Use .match() to find all matches
// Log results
```

### Exercise 20.4: String Replacement with Regex
```javascript
// TODO: Use regex with replace()
// Replace all occurrences of 'l' with 'L' in "Hello World"
// Use /l/g (global flag)
// Log result
```

---

## 21. DOM MANIPULATION (Browser Only)

### Exercise 21.1: Select Elements
```javascript
// TODO: Create HTML with id, class, and tag
// Select element by ID
// Select elements by class
// Select elements by tag
// Log all selections
```

### Exercise 21.2: Modify Content
```javascript
// TODO: Modify innerHTML and textContent
// Change innerHTML to add HTML
// Change textContent to change only text
// Compare the results
```

### Exercise 21.3: Modify Attributes
```javascript
// TODO: Modify element attributes
// Set data attribute
// Get class attribute
// Set style attribute
// Remove an attribute
```

### Exercise 21.4: Event Listeners
```javascript
// TODO: Add event listeners
// Click event on button
// Change event on input
// Submit event on form
// Log events when triggered
```

### Exercise 21.5: Create & Remove Elements
```javascript
// TODO: Create new elements dynamically
// Create <p> element
// Add text content
// Append to body
// Remove the element after 2 seconds
```

---

## 22. ERROR HANDLING

### Exercise 22.1: Try-Catch
```javascript
// TODO: Use try-catch block
// Try to access non-existent property (won't throw)
// Try to call undefined function
// Catch the error and log it
```

### Exercise 22.2: Finally Block
```javascript
// TODO: Use try-catch-finally
// Try block: some operation
// Catch block: handle error
// Finally block: cleanup code (always runs)
```

### Exercise 22.3: Throw Custom Error
```javascript
// TODO: Create function that validates age
// Throw error if age < 0 or age > 150
// Call with invalid age and catch the error
// Log the custom error message
```

### Exercise 22.4: Error Types
```javascript
// TODO: Handle different error types
// Cause TypeError by assigning to null
// Cause ReferenceError by using undefined variable
// Cause SyntaxError (this will show at parse time)
// Catch and log each type
```

---

## 23. ARRAY DESTRUCTURING ADVANCED

### Exercise 23.1: Default Values
```javascript
// TODO: Destructure with default values
// Const: [a = 10, b = 20] = [1]
// a should be 1, b should be 20 (default)
// Log both
```

### Exercise 23.2: Skipping Elements
```javascript
// TODO: Destructure and skip elements
// [first, , third, , fifth] = [1, 2, 3, 4, 5]
// Get 1st, 3rd, and 5th elements
// Log them
```

---

## 24. JSON

### Exercise 24.1: JSON.stringify()
```javascript
// TODO: Convert object to JSON string
// Object: { name: "Ali", age: 25, hobbies: ["coding", "reading"] }
// Use JSON.stringify()
// Log the string
```

### Exercise 24.2: JSON.parse()
```javascript
// TODO: Convert JSON string to object
// JSON string: '{"name":"Ali","age":25}'
// Use JSON.parse()
// Log the object and access properties
```

### Exercise 24.3: Pretty Print JSON
```javascript
// TODO: Use JSON.stringify with formatting
// Object: { name: "Ali", address: { city: "Karachi" } }
// Use JSON.stringify(obj, null, 2) for pretty printing
// Log result
```

---

## 25. TIMERS

### Exercise 25.1: setTimeout()
```javascript
// TODO: Use setTimeout to delay code
// Log "Start"
// After 2 seconds, log "Done"
// After 4 seconds, log "Finished"
```

### Exercise 25.2: setInterval()
```javascript
// TODO: Use setInterval to repeat code
// Log a counter every 1 second
// Stop after 5 seconds using clearInterval()
```

### Exercise 25.3: clearTimeout()
```javascript
// TODO: Schedule something with setTimeout
// Cancel it before it executes using clearTimeout()
// Log that it was cancelled
```

---

## 26. THIS KEYWORD

### Exercise 26.1: THIS in Object
```javascript
// TODO: Use 'this' in object method
// Object: { name: "Ali", greet: function() { return "Hi " + this.name } }
// Call greet() and log result
// Change name and call again
```

### Exercise 26.2: THIS in Arrow Function
```javascript
// TODO: Compare 'this' in regular vs arrow functions
// Create object with both function types
// Regular function: 'this' refers to object
// Arrow function: 'this' refers to global scope
// Log both and compare
```

### Exercise 26.3: Call, Apply, Bind
```javascript
// TODO: Use call(), apply(), bind()
// Create function: greet(greeting) { return greeting + ", " + this.name }
// Object: { name: "Ali" }
// Use call(): greet.call(obj, "Hello")
// Use apply(): greet.apply(obj, ["Hello"])
// Use bind(): const boundGreet = greet.bind(obj); boundGreet("Hello")
```

---

## 27. TYPE COERCION

### Exercise 27.1: Implicit Coercion
```javascript
// TODO: Understand implicit type coercion
// "5" + 2 = ? (string concatenation)
// "5" - 2 = ? (number subtraction)
// true + 1 = ? (boolean to number)
// null + 5 = ? (null to number)
// undefined + 5 = ? (undefined to NaN)
```

### Exercise 27.2: Truthy & Falsy
```javascript
// TODO: Check truthy and falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: everything else
// Create if statements with each and log
```

---

## 28. OBJECT ORIENTED PROGRAMMING

### Exercise 28.1: Object Methods Advanced
```javascript
// TODO: Create object with:
// - Properties: x, y
// - Methods: distance() from origin, move(dx, dy)
// Test each method
```

### Exercise 28.2: Method Chaining
```javascript
// TODO: Create object with methods that return 'this'
// Object: { value: 0, add(n) { this.value += n; return this; }, multiply(n) { this.value *= n; return this; } }
// Call: obj.add(5).multiply(2).add(3)
// Log final value
```

---

## 29. MODERN FEATURES

### Exercise 29.1: Object Shorthand
```javascript
// TODO: Use object shorthand syntax
// let name = "Ali";
// let age = 25;
// Create object: { name, age } instead of { name: name, age: age }
```

### Exercise 29.2: Computed Property Names
```javascript
// TODO: Use computed property names
// const key = "skill";
// Create object: { [key]: "JavaScript" }
// Access and log the value
```

### Exercise 29.3: For...in vs For...of
```javascript
// TODO: Compare for...in and for...of
// Array: [1, 2, 3]
// for...in: iterates over indices
// for...of: iterates over values
// Log both and compare
```

---

## 30. ADVANCED CONCEPTS

### Exercise 30.1: Memoization
```javascript
// TODO: Create a memoized function
// Function: fibonacci(n) - expensive calculation
// Store results to avoid recalculation
// Test with same input multiple times
```

### Exercise 30.2: Debouncing
```javascript
// TODO: Create a debounced function
// Function: search(query)
// Should only run after 1 second of no calls
// Simulate multiple rapid calls and observe
```

### Exercise 30.3: Throttling
```javascript
// TODO: Create a throttled function
// Function: onClick()
// Should only run once every 1 second regardless of calls
// Simulate rapid calls and observe
```

### Exercise 30.4: Composition
```javascript
// TODO: Create function composition
// Function: compose(f, g) that returns function that does g(f(x))
// Example: add5 = x => x + 5; double = x => x * 2
// composed = compose(add5, double); composed(3) = 16
```

---

## 31. CHALLENGES & REAL-WORLD PROBLEMS

### Challenge 1: To-Do List
```javascript
// TODO: Create a to-do list app (without DOM)
// Methods: addTask(task), removeTask(index), getTasks(), markComplete(index)
// Store tasks in array with properties: task, completed
// Test all methods
```

### Challenge 2: User Authentication
```javascript
// TODO: Create user authentication system
// Methods: register(username, password), login(username, password), logout()
// Store users in object with hashed passwords (use simple hash for now)
// Check if user exists before registering
```

### Challenge 3: Calculator
```javascript
// TODO: Create a calculator class
// Methods: add, subtract, multiply, divide
// Store history of operations
// Display: result, history
// Test all operations
```

### Challenge 4: Book Library
```javascript
// TODO: Create a book library system
// Methods: addBook(title, author, year), removeBook(id), searchByAuthor(author), sortByYear()
// Store books with unique ID
// Test all methods
```

### Challenge 5: Weather App (API)
```javascript
// TODO: Create weather app (mock API call)
// Function: fetchWeather(city) - returns promise
// Parse response and display temperature, humidity, description
// Handle errors gracefully
// Test with multiple cities
```

---

## Solutions Tips

- Start with basic exercises and gradually move to advanced ones
- Test your code frequently using console.log()
- Try to solve without looking at hints first
- Understand WHY code works, not just that it works
- Refactor code to make it cleaner
- Practice, Practice, Practice!

---

**Happy Learning! 🚀**
