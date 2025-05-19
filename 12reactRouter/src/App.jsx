import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Team from './Pages/Team'
import Course_Details from './Pages/Course_Details'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/courses' element={<Product/>}></Route>
          <Route path='/courses/:id' element={<Course_Details/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
