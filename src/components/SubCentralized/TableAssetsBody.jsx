import React from 'react'
import BannerTableATrader from './BannerTableATrader'

function TableAssets() {
  return (
    <div>
        <div className="table-assets-body">
            <div className="container">
                <div className="head-table-box">
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                    <a href="#" className='head-link-table'>
                        farex
                    </a>
                </div>
                <div className="table-items">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <BannerTableATrader/>
                        </div>
                        <div className="col-12 col-lg-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TableAssets