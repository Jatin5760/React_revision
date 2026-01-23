import { useEffect, useState } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("blue");  
  useEffect(()=>{
    setTimeout(()=>{
      setCount(++count)
    }, 2000)
  }, )
  return (
    <>
      <h1>My Favourite color {color} </h1>
      <button onClick={()=>setColor("black")}>Black</button>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count = count + 1)}>Increase</button>
    </>
  )
}

export default App
