import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  // Use effect data fetching mai kaam ata hai iske bina data fetch nahi ho sakta
  // Ek component ke change hone se dusre component par kya effect ata hai
  // Ye ek baar chalta hai aur refresh hone par dobara chalta hai.
  // Iske last mai ek [] dependency array hota hai isme koi bhi variable daal sakte hai aur jab wo variable update hoga use effect wapas chalega yani useeffect wapas render hoga.
  
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    document.title = counter;
    console.log("Use effect is running");
  }, [counter]);

  return (
    <div>
      <h1>Learning use effect</h1>

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default UseEffect;
