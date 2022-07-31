import React from 'react';
import forexLogo from '../../img/forexlogo.png';
import PaweredBannerTable from '../SubCentralized/PaweredBannerTable';
import TextBannerTable from '../SubCentralized/TextBannerTable';
import TitleBannerTable from '../SubCentralized/TitleBannerTable';
import Logo from '../../img/logo.png';
function BannerTableCForex() {
  
    const captionbanner={
        TitleBanner:"Forex Trading",
        TextBanner:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi "
    };
    return (
    <div className='banner-forex-box'>
        <div className="icon-banner-box">
            <img src={forexLogo} alt="forexLogo" className='icon-banner' />
        </div>
        <TitleBannerTable CaptionHeadBanner={captionbanner.TitleBanner}/>
        <div className="banner-text-items">
            
            <TextBannerTable TextBannerTable={captionbanner.TextBanner}/>
        </div>
        <div className="footer-baner-forex">
            <PaweredBannerTable/>
            <img src={Logo} alt="logo" width={90} className='ms-3'/>
        </div>

    </div>
  )
}

export default BannerTableCForex