import Chai from "./Chai";
function App() {
  const userName = "Jatin Sharmaaaa";
  return (
    // This is fragment wala concept, we can return multiple elements here (JSX hai ye)

    // Niche {} curly brackets mai final outcome ayega JS ka iske andar ham koi bhi expression nhi likh sakte like forloop aur if else, isme sirf evalated expression hi likh sakte hai.
    <>
      <h1>Chai aur react with vite | {userName}</h1>
      <Chai />
    </>
  );
}

export default App;
