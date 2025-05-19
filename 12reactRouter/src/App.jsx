import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Team from './Pages/Team'
import Course_Details from './Pages/Course_Details'
import Navbar from './Components/Navbar'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'
import Logout from './Pages/Logout'
import Indiangov from './Home/Indiangov'

function App() {
  const money = 10000;
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Indiangov money = {money}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/courses' element={<Product/>}></Route>
          <Route path='/courses/:id' element={<Course_Details/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
