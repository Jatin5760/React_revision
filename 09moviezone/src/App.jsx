import { useState } from 'react'
import Home from './Components/Home'
import Movies from './Components/MovieZone/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movies />
    </>
  )
}

export default App
