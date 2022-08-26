import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BannerTableATrader from '../components/SubCentralized/BannerTableATrader'
import HeaderTable from '../components/SubCentralized/HeaderTable'
import TableInfo from '../components/SubCentralized/TableInfo'
import SliderManager from '../components/SubCentralized/SliderManager'
import TechnologyCentralized from '../components/SubCentralized/TechnologyCentralized'
import AssetsCentralized from '../components/SubCentralized/AssetsCentralized'
import FocusTradeCentralized from '../components/SubCentralized/FocusTradeCentralized'
import axios from 'axios'
import { MasterContext } from '.'


function Centralized() {
  const [managers, setManagers] = useState([])
  const { setLoading } = useContext(MasterContext)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/managers/?page=all')
      .then(({ data }) => {
        setManagers(data)
      })
      .catch(f => console.log(f))
   
      .finally(f => setLoading(false))
  }, [])
  return (
    <div className='centeralized'>
      <Header />
      <div className="intro">
        <span className='back'></span>
        <span className='back-reverse'></span>
      </div>
      <div className="container">
        {/*focus trade  */}
        <FocusTradeCentralized />
        {/* Assets */}
        <AssetsCentralized />
      </div>
      {/* assets table */}
      <div className="table-assets-body">
        <div className="container">
          <HeaderTable activePage={'forex'}/>
          <div className="chart-table">
            <div className="row">
              <div className="col-12 col-lg-4">
                <BannerTableATrader />
              </div>
              <div className="col-12 col-lg-8">
                <TableInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find manager */}
      <SliderManager managers={managers} _class="manage-slider" />

      {/* technology */}
      <TechnologyCentralized />

      <Footer />

    </div>
  )
}

export default Centralized