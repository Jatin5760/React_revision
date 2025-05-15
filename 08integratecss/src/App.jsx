import React from "react";
import Laptop from "./Components/Laptop";

const App = () => {
  return (
    <>
      <div>
        <Laptop name="HP" model="Probook" price={75000} />
        <Laptop name="Lenevo" model="Yoga" price={50000} />
        <Laptop name="Apple" model="Macbook-Air-M1" price={95000} />
      </div>
    </>
  );
};

export default App;
