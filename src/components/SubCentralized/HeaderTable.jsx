import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTable({ activePage }) {
  return (
    <div>
        <div className="head-table-box ">
            <Link to="/centralized/forex" className={'head-link-table ' + (activePage === 'forex'? 'active': '')}>
                Forex
            </Link>
            <Link to="/centralized/stocks" className={'head-link-table ' + (activePage === 'stocks'? 'active': '')}>
                 Stock
            </Link>
            <Link to="/centralized/indices" className={'head-link-table ' + (activePage === 'indices'? 'active': '')}>
                Indices
            </Link>
            <Link to="/centralized/commodities" className={'head-link-table ' + (activePage === 'commodities'? 'active': '')}>
                Commodity
            </Link>
            <Link to="/centralized/etf" className={'head-link-table ' + (activePage === 'etf'? 'active': '')}>
                 Crypto
            </Link>
            <Link to="/centralized/crypto" className={'head-link-table ' + (activePage === 'crypto'? 'active': '')}>
                ETFs
            </Link>
        </div>
    </div>
  )
}

export default HeaderTable