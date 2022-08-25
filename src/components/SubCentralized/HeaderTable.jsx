import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTable() {
  return (
    <div>
        <div className="head-table-box ">
            <Link to="/center-forex" className='head-link-table '>
                Forex
            </Link>
            <Link to="/center-Stocks" className='head-link-table'>
                CFDs on stock
            </Link>
            <Link to="/center-indices" className='head-link-table'>
                Indices
            </Link>
            <Link to="/center-commodities" className='head-link-table'>
                Commodity
            </Link>
            <Link to="/center-etf" className='head-link-table'>
                Sport Crypto
            </Link>
            <Link to="/center-crypto" className='head-link-table'>
                Perp Crypto
            </Link>
        </div>
    </div>
  )
}

export default HeaderTable