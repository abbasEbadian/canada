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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8000'
} else {
  axios.defaults.baseURL = 'http://intelligentprotocols.com'
}

export const get_image_link = (url) => {
  if(!url) return ""
  if (process.env.NODE_ENV === 'development') {
    return "http://localhost:8000" + url
  }else{
    const x = url.split("8000")
    return x[x.length-1]
  }
}

  function App() {
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])

    return (
      <div className="App">
        <Router></Router>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    )
  }

  export default App
