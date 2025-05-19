import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Team from './Pages/Team'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/home' element={<About/>}></Route>
          <Route path='/home' element={<Contact/>}></Route>
          <Route path='/home' element={<Product/>}></Route>
          <Route path='/home' element={<Team/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
