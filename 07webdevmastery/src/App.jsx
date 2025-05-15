import React from "react";
import Person from "./Components/Person";
import Super from "./Components/Superman";
import { Test } from "./Components/Test";
import Product from "./Components/Product";

const App = () => {
  return (
    // Mai return ke andar js ka code nahi likhunga, Mai sirf curly bracket ke andar hi likhunga
    // <></> isko kehte hai fragment, isse ham mulitple divs ko return kar sakte hai.

    <>
      {/* <Person /> */}

      {/* This superman is a rafce so here we can even change its name in the import section */}

      {/* <Super /> */}

      {/* This is rafc so we can't change the name of functional component, but in case of rafce we can change name. */}

      {/* <Test /> */}

      {/* This is the example of resuable components */}
      <Product
        title="S23"
        brand="Samsung"
        price={75000}
        ram="8gb"
        rom="128gb"
        camera="50mp"
      />

      {/* Isme extra property pass nahi ki hai toh inki property empty rehti hai */}
      <Product title="S24" brand="Samsung" price={85000} />
      <Product title="S25" brand="Samsung" price={95000} />
      <Product title="S26" brand="Samsung" price={99000} />
    </>
  );
};

export default App;
