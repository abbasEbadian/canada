import { useState } from 'react'

import Router from './pages';
import './styles/global.css';
import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000'

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
