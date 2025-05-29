import React from "react";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  // Normal Variable react mai immutable hote hai change ya update nahi kar sakte.

  // hamari UI mai counter variable ka change reflect nahi hua isley ham use karte hai hooks ko

  // Hooks predefined function hote hai Hooks ke through is normal variable ko ham state variable mai convert kardenge
  //let counter = 0;
  

  // Ye useState hook hai iska shortcut hai "usess" is snipit se grenerate ho jayega code

//   const [arr, setArr] = useState([10,20,30])
//   const [obj, setObj] = useState({
//     name:"Jatin",
//     salary:150000
//   })

  const [counter, setCounter] = useState(100)


  const increase1 = () => {
    //counter++;
    setCounter(counter + 1)
    console.log("Counter :", counter);
  };

  const decrease1 = () => {
    //counter--;
    setCounter(counter - 1)
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
