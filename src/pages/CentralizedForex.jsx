import React from 'react'
import Header from '../components/Header'
import AssetsCentralized from '../components/SubCentralized/AssetsCentralized'
import FocusTradeCentralized from '../components/SubCentralized/FocusTradeCentralized'

import HeaderTable from '../components/SubCentralized/HeaderTable'
import TableInfo from '../components/SubCentralized/TableInfo'
import SliderManager from '../components/SubCentralized/SliderManager'
import BannerTableCForex from '../components/SubCentralized/BannerTableCForex'
import FreeEducationConsult from '../components/SubCentralized/FreeEducationConsult'
import CTA from '../components/SubCentralized/CTA'
import TechnologyCentralized from '../components/SubCentralized/TechnologyCentralized'
import StartNow from '../components/SubCentralized/StartNow'
import Footer from '../components/Footer'

function CentralizedForex() {
    return (
        <div className='centeralized'>
            <Header />
            <div className="intro">
                <span className='back'></span>
                <span className='back-reverse'></span>
            </div>
            <div className="container ">
                
                {/*focus trade  */}
                <FocusTradeCentralized />
                {/* Assets */}
                <AssetsCentralized />
            </div>
            {/* assets table */}
            <div className="table-assets-body">
                <div className="container">
                    <HeaderTable />
                    <div className="chart-table">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <BannerTableCForex />
                            </div>
                            <div className="col-12 col-lg-8">
                                <TableInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider Free education consult */}
            <FreeEducationConsult />
            {/* Find manager */}
            <SliderManager _class="manage-slider" showBorder />
            {/* CTA */}
            <CTA />
            {/* technology */}
            <TechnologyCentralized />
            {/* Start now */}
            <StartNow />
            <i className='my-5 d-block'></i>
            <Footer />

        </div>
    )
}

export default CentralizedForex