import { useState } from 'react'

import Router from './pages';
import './styles/global.css';
import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import 'swiper/less/navigation';
import Aos from 'aos'
import "aos/dist/aos.css"

import { useEffect } from 'react'
function App() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="App">
      <Router></Router>
    </div>
  )
}

export default App
