import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Centralized" element={<Centralized/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router