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

  let count = useRef(0); // useRef returns an object with "current" varible.
  // console.log(count.current);
  let [num, setNum] = useState(0);

  useEffect(()=>{
    count.current = count.current+1;
  })

  return (
    <>
      {/* <h1>My Favourite color {color} </h1>
      <button onClick={()=>setColor("black")}>Black</button> */}

      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>Increase</button>
    </>
  )
}

export default App
