import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import Blog from './Blog'
import Contact from './Contact'
import SingleBlog from './SingleBlog'
function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Centralized" element={<Centralized/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/singleBlog" element={<SingleBlog/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router