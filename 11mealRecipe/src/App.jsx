import { useState } from 'react'
import Meal from './Components/Meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Meal/>
    </>
  )
}

export default App
