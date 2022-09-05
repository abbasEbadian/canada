import React from 'react'
import PaweredBannerTable from './PaweredBannerTable';
import TextBannerTable from './TextBannerTable';
import TitleBannerTable from './TitleBannerTable';
import BannerTraderLogo from '../../img/BannerTableATrader (1).png';
import Logo from '../../img/logo.svg';


function BannerTableATrader() {
    const captionbanner={
        TitleBanner:"Are You a Professional Trader?",
        TextBanner:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi "
    };
    return (
        <div className="banner-trader-box">
            <div className="icon-banner-box">
                <img src={BannerTraderLogo} alt="BannerTableATrader" className='icon-banner' />
            </div>
            <TitleBannerTable CaptionHeadBanner={captionbanner.TitleBanner} />
            <div className="banner-text-items">
                
                <TextBannerTable TextBannerTable={captionbanner.TextBanner}/>
            </div>
            <div className="footer-baner-trader">
                <PaweredBannerTable/>
                <img src={Logo} alt="logo" width={90} className='ms-3'/>
            </div>

        </div>
  )
}

export default BannerTableATrader