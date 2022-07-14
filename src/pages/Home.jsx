import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleHeadBroadcasts from '../components/TitleHeadBroadcasts'
import protocolimg1 from '../img/protocol-component-img1.png'
import protocolimg2 from '../img/protocol-component-img2.png'
import protocolimg3 from '../img/protocol-component-img3.png'
import protocolimg4 from '../img/protocol-component-img4.png'
import CircuitDesign from '../img/CircuitDesign.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoGoals from '../img/Logo-goals.png'
import Transaction from '../img/Transaction.png'
import Commission from '../img/commission.png'
import Liquidity from '../img/Liquidity.png'
import Platform from '../img/Platform.png'
import Phone from '../img/phone.png'
import CheckIcon from '@mui/icons-material/Check';
import SyncIcon from '@mui/icons-material/Sync';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



function Home() {
  const CaptionName={
    protocol:"Protocol components",
    road:"Road Map",
    technology:"Technology"
  };
  return (
    <div>

      <Header/>
      <div className="container">
        {/* welcom  */}
        <div className="welcom-body">
          <div className="welcom-item-bg"></div>
          <div className="d-flex align-items-center">
            <div className="col-12 col-lg-4">
             
              <div className="welcom-item">
               
                <span className='title-welcom'><span className='welcom-b'>Welcome</span> to the new
                  generation trading platform</span>
                <p className="text-welcom">Decentralized multi assets perpetual platform, built on Solana</p>
                <div className="read-more-welcom-box">
                  <div className="sey-hi-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.483" height="38.483" viewBox="278 625.767 38.483 38.483"><g data-name="play-outline"><path d="M291.736 654.615a1.374 1.374 0 0 1-1.374-1.373v-16.484c0-.485.256-.934.673-1.182a1.374 1.374 0 0 1 1.374 0l15.11 8.242a1.374 1.374 0 0 1 0 2.418l-15.11 8.241c-.21.102-.44.15-.673.138Zm1.374-15.549v11.868L303.975 645l-10.865-5.934Z" fill="#ff861f" fillRule="evenodd" data-name="Path 33"/><path d="M297.23 628.517c9.104 0 16.484 7.38 16.484 16.483 0 9.103-7.38 16.483-16.483 16.483-9.104 0-16.484-7.38-16.484-16.483 0-9.103 7.38-16.483 16.484-16.483m0-2.748C286.61 625.77 278 634.38 278 645c0 10.62 8.61 19.23 19.23 19.23 10.621 0 19.231-8.61 19.231-19.23 0-10.62-8.61-19.23-19.23-19.23Z" fill="#ff861f" fillRule="evenodd" data-name="Path 32"/></g></svg>
                    <span className="sey-hi-to-itg">Sey hi to itg</span>
                  </div>
                  <div className="read-more-box">
                    <a href="" className='d-flex align-item-center'>
                      Read more
                      <ChevronRightIcon/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="circuit-design">
                <img src={CircuitDesign} alt="" width={700} height={700}/>
              </div>
            </div>
          </div>
        </div>
        {/*protocol component  */}
        <div className="protocol-component-body">
          <div className="title-Broadcasts-box">
            <TitleHeadBroadcasts CaptionHead={CaptionName.protocol}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>
            
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="protocol-component-item">
                <div className="protocol-component-shape-box">
                  <img src={protocolimg1} alt="" className='protocol-img1' height={51} width={51} />
                  
                </div>
                <h5 className='caption-protocol-component'>Tokenized share</h5>
                <p className='text-protocol-component'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

            </div>
            <div className="col-12 col-lg-3">
              <div className="protocol-component-item">
                <div className="protocol-component-shape-box">
                    <img src={protocolimg2} alt="" className='protocol-img1' height={51} width={51} />
                    
                </div>
                <h5 className='caption-protocol-component'>Tokenized share</h5>
                <p className='text-protocol-component'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

            </div>
            <div className="col-12 col-lg-3">
              <div className="protocol-component-item">
                <div className="protocol-component-shape-box">
                  <img src={protocolimg3} alt="" className='protocol-img1' height={51} width={51} />
                  
                </div>
                <h5 className='caption-protocol-component'>Tokenized share</h5>
                <p className='text-protocol-component'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

            </div>
            <div className="col-12 col-lg-3">
              <div className="protocol-component-item">
                <div className="protocol-component-shape-box">
                  <img src={protocolimg4} alt="" className='protocol-img1' height={51} width={51} />
                  
                </div>
                <h5 className='caption-protocol-component'>Tokenized share</h5>
                <p className='text-protocol-component'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

            </div>
          </div>

        </div>
        {/*Road Map  */}
        <div className="road-map-body">
          <div className="title-Broadcasts-box text-center">
            <TitleHeadBroadcasts CaptionHead={CaptionName.road}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>
            
          </div>
          <div className="row align-items-center">
            <div className="col-6 col-lg-2">
              <div className="octagon-check line01">
                <div className="octagon-head-check">
                  <span className="caption-octagon">Phase 1</span>
                  <CheckIcon/>

                </div>
                <p className="dec-octagon">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod 
                </p>

                
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="octagon-check line02">
                <div className="octagon-head-check">
                  <span className="caption-octagon">Phase 1</span>
                  <CheckIcon/>

                </div>
                <p className="dec-octagon">
                incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>

                
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="octagon-sync line03">
                <div className="octagon-head-sync">
                  <span className="caption-octagon">Phase 1</span>
                  <SyncIcon/>

                </div>
                <p className="dec-octagon">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod 
                </p>

                
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="octagon-accessTime line04">
                <div className="octagon-head-accessTime">
                  <span className="caption-octagon">Phase 1</span>
                  <AccessTimeIcon/>

                </div>
                <p className="dec-octagon-accessTime">
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="octagon-accessTime line05">
                <div className="octagon-head-accessTime">
                  <span className="caption-octagon">Phase 1</span>
                  <AccessTimeIcon/>

                </div>
                <p className="dec-octagon-accessTime">
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>

                
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="octagon-accessTime line06">
                <div className="octagon-head-accessTime">
                  <span className="caption-octagon">Phase 1</span>
                  <AccessTimeIcon/>

                </div>
                <p className="dec-octagon-accessTime">
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                
              </div>
            </div>
            
          </div>
        </div>
        {/* Assest */}
        <div className="assest-body">
          <div className="row">
            {/* Apple */}
            <div className="apple-assest my-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="assest-img"></div>
                </div>

                <div className="col-lg-5">
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
                </div>

                <div className="col-lg-3"></div>
              </div>
            </div>
            {/* Bitcoin */}
            <div className="bitcoin-assest my-5">
              <div className="row">
                <div className="col-lg-3"></div>

                <div className="col-lg-5">
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
                </div>

                <div className="col-lg-4">
                  <div className="assest-img"></div>
                </div>
              </div>

            </div>
            {/* Etherium */}
            <div className="etherium-assest my-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="assest-img"></div>
                </div>

                <div className="col-lg-5">
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
                </div>

                <div className="col-lg-3"></div>
              </div>
            </div>

          </div>
        </div>
        {/* goals*/}
        <div className="goals-body">
            <div className="d-flex align-items-center">
              <div className="col-12 col-lg-8">
                <div className="goals-item">
                  <div className="title-Broadcasts-box">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>
                    
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
                  <img src={LogoGoals} alt="" />
                  <span>Goals</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="features-body">
                  <div className="img-features-box1">
                    <img src={Transaction} alt=""  height={50}/>
               
                  </div>
                  <span className="text-features">Trade all assets in one platform</span>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="features-body">
                  <div className="img-features-box2">
                    <img src={Commission} alt=""  height={50}/>
               
                  </div>
                  <span className="text-features">Lowest commission on all assets</span>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="features-body">
                  <div className="img-features-box3">
                    <img src={Platform} alt=""  height={57} />
               
                  </div>
                  <span className="text-features">Decentralized trustless platform</span>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="features-body">
                  <div className="img-features-box4">
                    <img src={Liquidity} alt=""  height={51}/>
               
                  </div>
                  <span className="text-features pb-3">Highest liquidity</span>
                </div>
              </div>

            </div>
        </div>
        {/* technology */}
        <div className="technology-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="col-12 col-lg-6">
              <div className="technology-img ">
                <img src={Phone} alt="" height={283} width={325}/>
                <span className="text-technology-img">
                  Created by investment managers and experienced traders on financial markets.
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="technology-item">
                <div className="title-Broadcasts-box text-center">
                  <TitleHeadBroadcasts CaptionHead={CaptionName.technology}/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>
                </div>
                <p className="caption-technology">
                  We’ve created a unique visual system and strategy across the wideExisting spectrum of visible mobile applications…
                </p>
                <div className="dec-technology-box">
                  <span className="title-dec-technology">Hybrid liquidity model</span>
                  <p className="dec-technology">
                    Use hybrid model liquidity, orderbook and Liquidity pool
                  </p>
                </div>
                <div className="dec-technology-box">
                  <span className="title-dec-technology">Hybrid liquidity model</span>
                  <p className="dec-technology">
                    Use hybrid model liquidity, orderbook and Liquidity pool
                  </p>
                </div>
                <div className="dec-technology-box">
                  <span className="title-dec-technology">Hybrid liquidity model</span>
                  <p className="dec-technology">
                    Use hybrid model liquidity, orderbook and Liquidity pool
                  </p>
                </div>
                <div className="dec-technology-box">
                  <span className="title-dec-technology">Hybrid liquidity model</span>
                  <p className="dec-technology">
                    Use hybrid model liquidity, orderbook and Liquidity pool
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

export default Home