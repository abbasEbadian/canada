import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import protocolimg3 from '../img/protocol-component-img3.png'
import SearchIcon from '@mui/icons-material/Search'
import Commission from '../img/commission.png'
import TitleHeadBroadcasts from '../components/TitleHeadBroadcasts'
import TableAssetsBody from '../components/SubCentralized/TableAssetsBody'

function Centralized() {
  const CaptionName={
    
    manager:"Find The Best Manager",
    technology:"Technology"
  };
  return (
    <div>
        <Header/>
        <div className="container">
          {/*focus trade  */}
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
          {/* Assets */}
          <div className="assets-body">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="assets-card">
                  <div className="assets-bitcoin">
                    <img src={protocolimg3} alt="" />
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box">
                      <span className="name-assets">Bitcoin</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
              <div className="assets-card">
                  <div className="assets-etherium">
                    <img src={protocolimg3} alt="" />
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box">
                      <span className="name-assets">Etherium</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
              <div className="assets-card">
                  <div className="assets-apple">
                    <img src={protocolimg3} alt="" />
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box">
                      <span className="name-assets">Apple</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* assets table */}
        <TableAssetsBody/>

        {/* technology */}
        <div className="container">
          <div className="technology-centralized-body">
            <div className="title-Broadcasts-box text-center mb-5">
              <TitleHeadBroadcasts CaptionHead={CaptionName.technology}/>
              <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>
              <p className="caption-technology mx-auto mt-2">
                We’ve created a unique visual system and strategy across the wideExisting spectrum of visible mobile applications…
              </p>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="technology-centralized-items">
                  <div className="technology-centralized-img">
                    <img src={Commission} alt="" />
                  </div>
                  <div className="dec-technology-centralized-box">
                    <span className="title-artificial">Artificial Inteliigence</span>
                    <p className="dec-artificial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi 
                    </p>
                    <p className="dec-artificial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
              <div className="technology-centralized-items">
                  <div className="technology-centralized-img">
                    <img src={Commission} alt="" />
                  </div>
                  <div className="dec-technology-centralized-box">
                    <span className="title-artificial">Artificial Inteliigence</span>
                    <p className="dec-artificial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi 
                    </p>
                    <p className="dec-artificial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
       
    </div>
  )
}

export default Centralized