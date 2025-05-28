import React from "react";
import Person from "./Components/Person";
import Super from "./Components/Superman";
import { Test } from "./Components/Test";
import Product from "./Components/Product";
import Person2 from "./Components/Person2";
import Person3 from "./Components/Person3";

const App = () => {

  // Yahi par ham variable banayenge

  return (
    // Mai return ke andar js ka code nahi likhunga, Mai sirf curly bracket ke andar hi likhunga
    // <></> isko kehte hai fragment, isse ham mulitple divs ko return kar sakte hai.
    <>
      <div>
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
      </div>

      <br />

      <div>
        <Person2 name="Jatin" age="21" salary={120000} />
        <Person2 name="Jayant" age="18" salary={150000} />
        <Person2 name="Super Man" age="200" salary={1000} />
      </div>

      <br />

      <div>
        <Person3 name="Modi" age={74} position="Prime Minister" citizen = {true}/>
        <Person3 name="Donald Trump" age={85} position="Prime Minister" citizen = {false} />
      </div>
    </>
  );
};

export default App;
