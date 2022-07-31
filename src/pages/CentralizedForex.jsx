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

function CentralizedForex() {
  return (
    <div>
        <Header/>
        <div className="container">
          {/*focus trade  */}
          <FocusTradeCentralized/>
          {/* Assets */}
          <AssetsCentralized/>
        </div>
        {/* assets table */}
        <div className="table-assets-body">
            <div className="container">
                <HeaderTable/>
                <div className="chart-table">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <BannerTableCForex/>
                        </div>
                        <div className="col-12 col-lg-8">
                            <TableInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* slider Free education consult */}
        <FreeEducationConsult/>
        {/* Find manager */}
        <SliderManager _class="manage-slider" showBorder/>
        {/* CTA */}
        <CTA/>
        {/* technology */}
        <TechnologyCentralized/>
        {/* Start now */}
        <StartNow/>
    
    </div>
  )
}

export default CentralizedForex