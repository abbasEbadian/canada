import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import Blog from './Blog'
function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Centralized" element={<Centralized/>} />
            <Route path="/Blog" element={<Blog/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router