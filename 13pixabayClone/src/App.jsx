import { useState } from 'react'
import Images from './Component/Images'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Images/>
    </>
  )
}

export default App
