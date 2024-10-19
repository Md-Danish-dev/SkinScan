import { useState } from 'react'
import './App.css'
import Navbar from './components/HomePage/Navbar'
import Hero from './components/HomePage/Hero'
import HowItWorks from './components/HomePage/HowItWorks'
import TrustPart from './components/HomePage/TrustPart'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrustPart />
    </>
  )
}

export default App
