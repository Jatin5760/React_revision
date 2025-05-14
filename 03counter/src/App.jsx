import { useState } from "react";
import "./App.css";

function App() {

  // Ye ek hook hai jo UI mai cheeze update kar sakta hai, aur UI mai changes reflect kar sakta hai.
  // SetCounter ek method hai ya function kehlo, ye responsible hai counter variable ko update karne ke liye.
  // Jaha Jaha bhi counter variable ayega webpage mai waha ye update kardega ek baar mai hi
  let [counter, setCounter] = useState(10)


  //let counter = 5;

  const addValue = () => {
    //counter = counter + 1;
    console.log("clicked", counter);
    setCounter(counter + 1)
  };


  const removeValue = () =>{
    console.log("clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello it's me</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
