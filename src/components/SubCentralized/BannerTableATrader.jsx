import React from 'react'
import PaweredBannerTable from './PaweredBannerTable';
import TextBannerTable from './TextBannerTable';
import TitleBannerTable from './TitleBannerTable';
import protocolimg1 from '../../img/protocol-component-img1.png'


function BannerTableATrader() {
    const captionbanner={
        TitleBanner:"Are You a Professional Trader?",
        TextBanner:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi "
    };
    return (
    <div>
        <div className="banner-trader-box">
            <div className="icon-banner-box">
                <img src={protocolimg1} alt="" className='icon-banner' />
            </div>
            <div className="banner-text-items">
                <TitleBannerTable CaptionHeadBanner={captionbanner.TitleBanner}/>
                <TextBannerTable TextBannerTable={captionbanner.TextBanner}/>
            </div>
            <div className="footer-banner-bg">
                <PaweredBannerTable/>
            </div>

        </div>
    </div>
  )
}

export default BannerTableATrader