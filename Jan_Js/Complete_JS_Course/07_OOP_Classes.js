/*
================================================================================
  OOP: CLASSES & INHERITANCE
================================================================================

  THEORY:
  
  1. CLASSES (ES6):
     - JS is technically "Prototype-based", but Classes provide a cleaner syntax to organize code.
     - A Class is a blueprint for creating objects with shared properties and methods.

  2. CONSTRUCTOR:
     - Special method `constructor()` that runs automatically when you call `new ClassName()`.
     - Used to initialize properties (e.g., `this.name = name`).

  3. INHERITANCE (`extends`):
     - Mechanism for a child class to acquire properties/methods of a parent class.
     - `super()`: MUST be called in child constructor before using `this`. It calls parent's constructor.

  4. STATIC METHODS (`static`):
     - Methods that belong to the Class itself, NOT the instances.
     - Example: `Math.max()` is static. You don't do `const m = new Math(); m.max()`. You just call `Math.max()`.
     - Use case: Utility functions helper methods related to the class topic but not needing specific instance data.

  5. ENCAPSULATION (Getters/Setters):
     - `get prop()`: Defines a function that is accessed like a property `obj.prop`.
     - `set prop(val)`: Defines a function that runs when you assign `obj.prop = val`.
     - Useful for validation or computing values on fly.
     - *Private Fields*: In modern JS, properties starting with `#` (e.g., `#balance`) are truly private and cannot be accessed from outside.

*/

// ==========================================
// EXERCISES
// ==========================================

console.log("--- 07 OOP CLASSES ---");

// ------------------------------------------
// 1. BASIC CLASS
// ------------------------------------------
/*
  TODO:
  1. Create a class `Car`.
  2. Constructor takes `brand` and `model`.
  3. Method `startEngine()` logs "Engine of [brand] [model] started.".
  4. Create an instance `myCar` = new Car("Toyota", "Corolla").
  5. Call `myCar.startEngine()`.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 2. INHERITANCE (Extends)
// ------------------------------------------
/*
  TODO:
  1. Create class `ElectricCar` that extends `Car`.
  2. Constructor takes `brand`, `model`, `batteryLevel`.
  3. Remember to call `super(brand, model)` inside constructor first!
  4. Add method `charge()` that logs "Charging... Battery at [batteryLevel] %".
  5. Create instance and call methods from both Parent and Child classes.
*/

// YOUR CODE HERE:




// ------------------------------------------
// 3. GETTERS & SETTERS (Encapsulation)
// ------------------------------------------
/*
  TODO:
  1. Create class `Account`.
  2. Property `_balance` (by convention _ means private-ish).
  3. Create `get balance()` that returns `_balance` with currency sign "$".
  4. Create `set balance(value)` that updates `_balance` only if value is positive.
  
  5. Test: `acc.balance = 100` (setter) -> console.log(acc.balance) (getter).
*/

// YOUR CODE HERE:
