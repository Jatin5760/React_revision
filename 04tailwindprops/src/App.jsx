import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObject = {
    username: "Jatin",
    age: 21,
  };

  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-red-800 p-4 rounded-2xl">Tailwind test</h1>
      <Card
        username="Shimla"
        btnText="Click Me"
        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0="
      />
      <Card
        username="Good "
        someObject={myObject}
        someArr={newArr}
        src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <Card
        username="Kashmir Valley"
        btnText="Visit Me"
        src="https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?ga=GA1.1.1626863503.1747290901&semt=ais_hybrid&w=740"
      />
    </>
  );
}

export default App;
