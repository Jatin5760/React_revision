import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 200000000;

  const [counter, setCounter] = useState(0);
  return (
    <MoneyContext.Provider
      value={{
        money,
        counter,
        setCounter,
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
