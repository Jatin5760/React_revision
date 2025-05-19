import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 20;

  const dollar = 10;

  const name = 'Jatin'

  const [counter, setCounter] = useState(0);
  return (
    <MoneyContext.Provider
      value={{
        money,
        dollar,
        counter,
        setCounter,
        name,
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
