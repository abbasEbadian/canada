import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import CentralizedForex from './CentralizedForex'
import Blogs from './Blogs'
import SignIn from './SignIn'
import SignUp from './SignUp'
// import Dashboard from './Admin/Dashboard'

import Blog from './Blog'
import Contact from './Contact'
import SingleBlog from './SingleBlog'
import About from './About'

function Router() {
  return (
      <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/center" element={<Centralized/>} />
            <Route path="/center-forex" element={<CentralizedForex/>} />
            <Route path="/blog" element={<Blogs/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            {/* <Route path="/admin" element={<Dashboard/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/singleBlog" element={<SingleBlog/>} />
            <Route path="/about" element={<About/>} />

        </Routes>
    </HashRouter>
  )
}

export default Router