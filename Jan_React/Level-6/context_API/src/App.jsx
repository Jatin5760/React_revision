import { useContext } from 'react'
import './App.css'
import { data } from './context/UserContext';
import Card from './Card';
function App() {
  let name = useContext(data)
  console.log(name);

  return (
    <>
      <h1>Hii i am app component it is passed as a children of user context</h1>
      <h2>{data}</h2>
      <Card/>
    </>
  )
}

export default App
