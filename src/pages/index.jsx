import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import CentralizedForex from './CentralizedForex'
import Blogs from './Blogs'

function Router() {
  return (
      <HashRouter>
        <Routes>
            <Route path="/center" element={<Centralized/>} />
            <Route path="/center-forex" element={<CentralizedForex/>} />
            <Route path="/blog" element={<Blogs/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    </HashRouter>
  )
}

export default Router