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
import NewsSlider from '../components/SubBlogs/NewsSlider'
import styled from '@emotion/styled'
import CenterIntro from '../components/SubCentralized/CenterIntro'

const CentralizedImage = styled.div`
margin-bottom: 64px;
  img{
    max-width: 400px;
  }
  @media (min-width: 992px){
    img{
      max-width: unset;
    }
  }
`
function Centralized() {
  const [managers, setManagers] = useState([])
  const [blogs, setBlogs] = useState([])
  const [slides, setSlides] = useState([])
  const { setLoading } = useContext(MasterContext)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/centralized/')
      .then(({ data }) => {
        setSlides(data)
      })
      .catch(f => console.log(f))
    axios.get('/api/v1/managers/?page=all')
      .then(({ data }) => {
        setManagers(data)
      })
      .catch(f => console.log(f))

    axios.get('/api/v1/blogs/press/')
      .then(({ data }) => {
        setBlogs(data)
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
      
       <CenterIntro slides={slides}/>
      {/* assets table */}
      <div className="table-assets-body mt-0">
        <div className="container">
          <HeaderTable activePage={'forex'} />
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
      <CentralizedImage className="container text-center ">
        <picture  width={"100%"}>
          <source media="(max-width:992px)" srcSet="img/mobile/Features.png"  />
          <img src="img/Features.png" className="text-center" alt="features" width={"100%"}/>
        </picture>
  
      </CentralizedImage>

      {/* Find manager */}
      <SliderManager managers={managers} _class="manage-slider" />

      {/* technology */}
      <TechnologyCentralized />

      <NewsSlider postList={blogs} class_prepend={'pressList'} title={"In Press"} />

      <Footer />

    </div>
  )
}

export default Centralized