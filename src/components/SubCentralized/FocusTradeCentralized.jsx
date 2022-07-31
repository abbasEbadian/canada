import React from 'react'
import protocolimg3 from '../../img/protocol-component-img3.png'
import SearchIcon from '@mui/icons-material/Search'
function FocusTradeCentralized() {
  return (
    <div className='col-lg-6 col-md-8 col-12 mx-auto my-4 my-lg-0'>
        <div className="focus-trade-body">
            <div className="focus-trade-img">
              <img src={protocolimg3} alt="FocusOnYourTrade" />
            </div>
            <span className="title-focus-trade">Focus On <span className="focus-trade-blue">Your Trade</span></span>
            <span className="title-focus-trade2">not on the flow</span>
            <p className="text-focus-trade"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="search-assets-box">
             
              <input type="text" className="input-search-assets" placeholder='Search Assets...' />
              <button className='btn-search-assets'><SearchIcon/></button>


            </div>
        </div>
    </div>
  )
}

export default FocusTradeCentralized