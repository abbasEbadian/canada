import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTable({ activePage }) {
  return (
    <div>
        <div className="head-table-box ">
            <Link to="/centrilized/forex" className={'head-link-table ' + (activePage === 'forex'? 'active': '')}>
                Forex
            </Link>
            <Link to="/centrilized/stocks" className={'head-link-table ' + (activePage === 'stocks'? 'active': '')}>
                CFDs on stock
            </Link>
            <Link to="/centrilized/indices" className={'head-link-table ' + (activePage === 'indices'? 'active': '')}>
                Indices
            </Link>
            <Link to="/centrilized/commodities" className={'head-link-table ' + (activePage === 'commodities'? 'active': '')}>
                Commodity
            </Link>
            <Link to="/centrilized/etf" className={'head-link-table ' + (activePage === 'etf'? 'active': '')}>
                Sport Crypto
            </Link>
            <Link to="/centrilized/crypto" className={'head-link-table ' + (activePage === 'crypto'? 'active': '')}>
                Perp Crypto
            </Link>
        </div>
    </div>
  )
}

export default HeaderTable