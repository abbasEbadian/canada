import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import CentralizedForex from './CentralizedForex'
import Blog from './Blog'

function Router() {
  return (
      <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/center" element={<Centralized/>} />
            <Route path="/center-forex" element={<CentralizedForex/>} />
            <Route path="/Blog" element={<Blog/>} />
        </Routes>
    </HashRouter>
  )
}

export default Router