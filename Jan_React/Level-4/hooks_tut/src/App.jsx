import { useEffect, useState, useRef } from 'react';
import './App.css'

function App() {
  // let [count, setCount] = useState(0);
  // let [color, setColor] = useState("blue"); 

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(++count)
  //   }, 2000)
  // }, [])
  let inputvalue = useRef("");
  let count = useRef(0); // useRef returns an object with "current" varible.
  // useRef will persist re rendering and it will not allow us to do unnessary render things
  // useRef is also used to access DOM elements.

  // console.log(count.current);
  let [num, setNum] = useState(0);

  useEffect(()=>{
    count.current = count.current+1;

  })

  return (
    <>
      {/* <h1>My Favourite color {color} </h1>
      <button onClick={()=>setColor("black")}>Black</button> */}
        <input type="text" ref={inputvalue} value="Jatin Sharma"/>
      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>Increase</button>
    </>
  )
}

export default App
