import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import CentralizedForex from './CentralizedForex'
import Blogs from './Blogs'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Dashboard from './Admin/Dashboard'

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
            <Route path="/admin" element={<Dashboard/>} />
        </Routes>
    </HashRouter>
  )
}

export default Router