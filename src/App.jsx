import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/HomePage/Home'
import Blog from './components/Blog/Blog'
import AboutUs from './components/AboutUs/AboutUs'

function App() {

  return (
    <>
      
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
