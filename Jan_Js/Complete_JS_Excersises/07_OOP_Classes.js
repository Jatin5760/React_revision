/*
================================================================================
  OOP: CLASSES & INHERITANCE
================================================================================

  THEORY:
  1. CLASS: Blueprint for creating objects.
  2. CONSTRUCTOR: Method called automatically when creating an instance.
  3. METHODS: Functions inside the class.
  4. INHERITANCE (`extends`): Child class inherits properties/methods from Parent.
  5. STATIC: Methods/Properties belonging to the class itself, not instances.

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
