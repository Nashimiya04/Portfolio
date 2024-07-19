import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import HeroSection from '../Pages/HeroSection/HeroSection'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Skills from '../Pages/Skills/Skills'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'



const Routerapp = () => {
  return (
    <div> 
        <Router>
        
        <Routes>
            <Route path='/Navbar' element={<Navbar/>}/>
            <Route path='/' element={<HeroSection/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Skills" element={<Skills/>} />
      
        </Routes>
        
    </Router>
    </div>
  )
}

export default Routerapp