import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Home from './Home'
import Centralized from './Centralized'
import CentralizedForex from './CentralizedForex'
import CentralizedStocks from './CentralizedStocks'
import CentralizedCommodities from './CentralizedCommodities'
import CentralizedETF from './CentralizedETF'
import CentralizedIndices from './CentralizedIndices'
import CentralizedCrypto from './CentralizedCrypto'
import Blogs from './Blogs'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Contact from './Contact'
import SingleBlog from './SingleBlog'
import SinglePress from './SinglePress'
import About from './About'
import styled from '@emotion/styled';
import { Triangle } from 'react-loader-spinner'

const Loader = styled.div`
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  transition: 0.3s;
  opacity: 1;
  z-index: 300;
  
  &.deactive{
    visibility: hidden;
  }
  `


export const MasterContext = React.createContext();

function Router() {
  const [ loading, setLoading ] = useState(false)


  const _setLoading = (state) => {
    if (!state)
      setTimeout(() => { setLoading(false) }, 1000)
    else {
      setLoading(true)
    }
  }

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto"
  }, [loading])


  return (<>
    <Loader className={!loading && "deactive"}>
      <Triangle width={80} height={80} color="#fff" />
    </Loader>

    <MasterContext.Provider value={{
      loading,
      setLoading: _setLoading,
    }}>
      <Routes>
        <Route path="/blog" element={<Blogs />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/centralized" element={<Centralized />} />
        <Route path="/centralized/forex" element={<CentralizedForex />} />
        <Route path="/centralized/stocks" element={<CentralizedStocks />} />
        <Route path="/centralized/commodities" element={<CentralizedCommodities />} />
        <Route path="/centralized/indices" element={<CentralizedIndices />} />
        <Route path="/centralized/etf" element={<CentralizedETF />} />
        <Route path="/centralized/crypto" element={<CentralizedCrypto />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/press/:slug" element={<SinglePress />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MasterContext.Provider>
  </>
  )
}

export default Router