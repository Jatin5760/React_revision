import { useState } from "react";
import Images from "./Component/Images";
import "./index.css";
import Navbar from "./Component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Images />
    </>
  );
}

export default App;
