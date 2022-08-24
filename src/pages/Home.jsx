import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeadBroadcasts from '../components/TitleHeadBroadcasts'
import protocolimg1 from '../img/protocol-component-img1.png'
import protocolimg2 from '../img/protocol-component-img2.png'
import protocolimg3 from '../img/protocol-component-img3.png'
import protocolimg4 from '../img/protocol-component-img4.png'
import CircuitDesign from '../img/CircuitDesign.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoGoals from '../img/goal_logo.gif'
import Transaction from '../img/Transaction.png'
import Commission from '../img/commission.png'
import Liquidity from '../img/Liquidity.png'
import Platform from '../img/Platform.png'
import Phone from '../img/Phone.png'
import apple_motion from '../img/motion/apple.mp4'
import etherium_motion from '../img/motion/etherium.mp4'
import bitcoin_motion from '../img/motion/bitcoin.mp4'
import RoadMap from '../components/subHome/RoadMap'
import myvideo from '../img/1.mp4'
import myvideo2 from '../img/1_1.mp4'
import { useTabsList } from '@mui/base'
import axios from 'axios'

function Home() {

  const CaptionName = {
    protocol: "Protocol components",
    road: "Road Map",
    technology: "Technology"
  };
  const [utils, setUtils] = useState([])

  useEffect(() => {
    axios.get('/api/v1/utils/')
      .then(({ data }) => {
        setUtils(data.sort((a, b) => a.sequence - b.sequence))
      })
      .catch(f => console.log(f))

  }, [])

  const utilImgs = [protocolimg1, protocolimg2, protocolimg3, protocolimg4]
  return (
    <div>

      <Header />
      <div className="container">
        {/* welcom  */}
        <div className="welcom-body position-relative">
          <div className="welcom-item-bg"></div>
          <video autoPlay playsInline muted loop className='w-100 position-absolute top-100 end-0 d-none d-lg-block twomovie' >
            <source src={myvideo2} type="video/mp4" />
          </video>
          <div className="d-flex align-items-center flex-wrap mb-5">
            <div className="col-12 col-lg-5">

              <div className="welcom-item">

                <h2 className='my-3 text-center'>
                  <span className='title-welcom'><span className='welcom-b'>Welcome</span> to the new
                    generation trading platform</span>
                </h2>
                <p className="text-welcom">Decentralized multi assets perpetual platform, built on Solana</p>
                <div className="read-more-welcom-box">
                  <div className="sey-hi-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.483" height="38.483" viewBox="278 625.767 38.483 38.483"><g data-name="play-outline"><path d="M291.736 654.615a1.374 1.374 0 0 1-1.374-1.373v-16.484c0-.485.256-.934.673-1.182a1.374 1.374 0 0 1 1.374 0l15.11 8.242a1.374 1.374 0 0 1 0 2.418l-15.11 8.241c-.21.102-.44.15-.673.138Zm1.374-15.549v11.868L303.975 645l-10.865-5.934Z" fill="#ff861f" fillRule="evenodd" data-name="Path 33" /><path d="M297.23 628.517c9.104 0 16.484 7.38 16.484 16.483 0 9.103-7.38 16.483-16.483 16.483-9.104 0-16.484-7.38-16.484-16.483 0-9.103 7.38-16.483 16.484-16.483m0-2.748C286.61 625.77 278 634.38 278 645c0 10.62 8.61 19.23 19.23 19.23 10.621 0 19.231-8.61 19.231-19.23 0-10.62-8.61-19.23-19.23-19.23Z" fill="#ff861f" fillRule="evenodd" data-name="Path 32" /></g></svg>
                    <span className="sey-hi-to-itg">Sey hi to itg</span>
                  </div>
                  <div className="read-more-box">
                    <a href="" className='d-flex align-item-center'>
                      Read more
                      <ChevronRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 ">
              <div className="circuit-design text-center position-relative">

                <video autoPlay playsInline muted loop className='w-75'>
                  <source src={myvideo} type="video/mp4" />
                </video>

              </div>
            </div>
          </div>
        </div>
        {/*protocol component  */}
        <div className="protocol-component-body">
          <div className="title-Broadcasts-box">
            <TitleHeadBroadcasts CaptionHead={CaptionName.protocol} />
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>

          </div>
          <div className="row">
            {
              utils.map((util, idx) => {
                return <div className="col-12 col-lg-3 my-2 my-md-0" data-aos="flip-left" key={util.id}>
                  <div className="protocol-component-item"  >
                    <div className="protocol-component-shape-box">
                      <img src={utilImgs[idx]} alt={util.title } className={'protocol-img1' }height={51} width={51} />
                    </div>
                    <h5 className='caption-protocol-component'>{util.title}</h5>
                    <p className='text-protocol-component ff'>{util.content}</p>
                  </div>
                </div>
              })
            }

           
          </div>

        </div>
        {/*Road Map  */}
        <RoadMap />
        {/* Assest */}
        <div className="assest-body">
          <div className="row">
            {/* Apple */}
            <div className="apple-assest  asset-row">
              <div className="row">
                <div className="col-lg-7 col-12 content">
                  <div className="assest-img">
                    {/* <img src={apple_motion} alt="apple motion" /> */}
                    <video autoPlay playsInline muted loop className='w-100'>
                      <source src={apple_motion} type="video/mp4" />
                    </video>
                  </div>
                  <div className="assest-item x4">
                    <div className="caption-assest-box">
                      <span className="caption-assest">Assest to Trade</span>
                      <span className="assest-name">Apple</span>
                      <span className="assest-name"></span>
                    </div>
                    <div className="value-assest-box">
                      <span className="value-assest">456$</span>
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>
                  </div>
                  {/* mobile assets */}
                  <div className="assets-item-mobile">
                    <div className="caption-assest-box-mobile">
                      <span className="caption-assest">Assest to Trade</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="assest-name">Apple</span>
                      <span className="value-assest">456$</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
            {/* Bitcoin */}
            <div className="bitcoin-assest  asset-row">
              <div className="row flex-row-reverse">
                <div className="col-lg-8 content"  >
                  <div className="assest-item x4">
                    <div className="caption-assest-box">
                      <span className="caption-assest">Assest to Trade</span>
                      <span className="assest-name">Apple</span>
                      <span className="assest-name"></span>
                    </div>
                    <div className="value-assest-box">
                      <span className="value-assest">456$</span>
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>
                  </div>
                  <div className="assest-img">
                    {/* <img src={apple_motion} alt="apple motion" /> */}
                    <video autoPlay playsInline muted loop className='w-100'>
                      <source src={bitcoin_motion} type="video/mp4" />
                    </video>
                  </div>
                  {/* mobile assets */}
                  <div className="assets-item-mobile">
                    <div className="caption-assest-box-mobile">
                      <span className="caption-assest">Assest to Trade</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="assest-name">Apple</span>
                      <span className="value-assest">456$</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3"></div>
              </div>

            </div>
            {/* Etherium */}
            <div className="etherium-assest  asset-row">
              <div className="row">
                <div className="col-lg-7 col-12 content"  >
                  <div className="assest-img">
                    {/* <img src={etherium_motion} alt="apple motion" /> */}
                    <video autoPlay playsInline muted loop className='w-100' >
                      <source src={etherium_motion} type="video/mp4" />
                    </video>
                  </div>

                  <div className="assest-item x4">
                    <div className="caption-assest-box">
                      <span className="caption-assest">Assest to Trade</span>
                      <span className="assest-name">Apple</span>
                      <span className="assest-name"></span>
                    </div>
                    <div className="value-assest-box">
                      <span className="value-assest">456$</span>
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>
                  </div>
                  {/* mobile assets */}
                  <div className="assets-item-mobile">
                    <div className="caption-assest-box-mobile">
                      <span className="caption-assest">Assest to Trade</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="assest-name">Apple</span>
                      <span className="value-assest">456$</span>
                    </div>
                    <div className="value-assest-box-mobile">
                      <span className="value-assest">CHG</span>
                      <span className="value-assest">VOL</span>
                    </div>

                  </div>
                </div>

                <div className="col-lg-3"></div>
              </div>
            </div>

          </div>
        </div>
        {/* goals*/}
        <div className="goals-body">
          <div className="d-flex align-items-center flex-wrap-reverse mb-5">
            <div className="col-12 col-lg-8">
              <div className="goals-item">
                <div className="title-Broadcasts-box">

                  <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>

                </div>
                <div className="texts-goals">
                  <p className="text-goals">
                    We make a decentralized multi assets platform to trade perpetual and real assets with highest Transparency, lowest commission and completely trustless.
                  </p>
                  <p className="text-goals">
                    It’s time to change our attitude and build something that doesn’t exist in financial markets.
                  </p>
                  <p className="text-goals">
                    People must trade and invest in permissionless, unrestricted and trustless platform.
                  </p>
                  <span className='text-goals-b'>Trade all assets in one decentralized platform!</span>
                </div>
              </div>

            </div>
            <div className="col-12 col-lg-4">
              <div className="Logo-Goals-box">
                <img src={LogoGoals} alt="goals" className='w-100' />
                {/* <span>Goals</span> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3 my-4">
              <div className="features-body">
                <div className="img-features-box1">
                  <img src={Transaction} alt="" height={50} />

                </div>
                <span className="text-features">Trade all assets in one platform</span>
              </div>
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div className="features-body">
                <div className="img-features-box2">
                  <img src={Commission} alt="" height={50} />

                </div>
                <span className="text-features">Lowest commission on all assets</span>
              </div>
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div className="features-body">
                <div className="img-features-box3">
                  <img src={Platform} alt="" height={57} />

                </div>
                <span className="text-features">Decentralized trustless platform</span>
              </div>
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div className="features-body">
                <div className="img-features-box4">
                  <img src={Liquidity} alt="" height={51} />

                </div>
                <span className="text-features pb-3">Highest liquidity</span>
              </div>
            </div>

          </div>
        </div>
        {/* technology */}
        <div className="technology-body">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="col-12 col-lg-6">
              <div className="technology-img ">
                <img src={Phone} alt="" height={283} width={325} data-aos="fade-up-right" />
                <span className="text-technology-img">
                  Created by investment managers and experienced traders on financial markets.
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="technology-item">
                <div className="title-Broadcasts-box text-center">
                  <TitleHeadBroadcasts CaptionHead={CaptionName.technology} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                </div>
                <p className="caption-technology">
                  We’ve created a unique visual system and strategy across the wideExisting spectrum of visible mobile applications…
                </p>
                <div className="dec-technology-box" data-aos="fade-up">
                  <span className="title-dec-technology">Hybrid liquidity model</span>
                  <p className="dec-technology">
                    Use hybrid model liquidity, orderbook and Liquidity pool
                  </p>
                </div>
                <div className="dec-technology-box" data-aos="fade-down">
                  <span className="title-dec-technology">On chain- Orderbook execution</span>
                  <p className="dec-technology">
                    On chain trade execution On Solana blockchain
                  </p>
                </div>
                <div className="dec-technology-box" data-aos="fade-up">
                  <span className="title-dec-technology">Cross chain integration</span>
                  <p className="dec-technology">
                    Cross chain integration by Wormhole protocol
                  </p>
                </div>
                <div className="dec-technology-box" data-aos="fade-down">
                  <span className="title-dec-technology">Tokenized bundle</span>
                  <p className="dec-technology">
                    Tokenized position and account, transfer to wallets or use as a collateral
                  </p>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Home