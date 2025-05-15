import React from "react";
import "./Counter.css";

const Counter = () => {
  // Normal Variable react mai immutable hote hai change ya update nahi kar sakte.

  // hamari UI mai counter variable ka change reflect nahi hua isley ham use karte hai hooks ko

  // Hooks predefined function hote hai
  let counter = 0;

  const increase1 = () => {
    counter++;
    console.log("Counter :", counter);
  };

  const decrease1 = () => {
    counter--;
    console.log("Counter :", counter);
  };

  return (
    <div>
      <h1>Value: {counter}</h1>
      <button onClick={increase1}>Increase</button>
      <button onClick={decrease1}>Decrease</button>
    </div>
  );
};

export default Counter;
