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
import Notfound from './404'
import styled from '@emotion/styled';
import { Triangle } from 'react-loader-spinner'
import DocOverview from './document/DocOverview'
import DocGettingStarted from './document/DocGettingStarted'
import DocPools from './document/DocPools'
import DocAccount from './document/DocAccount'
import DocPrice from './document/DocPrice'
import DocArtificial from './document/DocArtificial'
import DocTokens from './document/DocTokens'
import DocLiquidation from './document/DocLiquidation'
import Comming from './Perpetual'
import {useLocation} from 'react-router-dom'
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export function Router() {
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
      
        <ScrollToTop />
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
        <Route path="/doc/overview" element={<DocOverview />} />
        <Route path="/doc/technical-review" element={<DocGettingStarted />} />
        <Route path="/doc/pools" element={<DocPools />} />
        <Route path="/doc/accounts" element={<DocAccount />} />
        <Route path="/doc/pricing" element={<DocPrice />} />
        <Route path="/doc/artificial" element={<DocArtificial />} />
        <Route path="/doc/tokens" element={<DocTokens />} />
        <Route path="/doc/liquidation" element={<DocLiquidation />} />
        <Route path="/comming-soon" element={<Comming />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </MasterContext.Provider>
  </>
  )
}

export default Router