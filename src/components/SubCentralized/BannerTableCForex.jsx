import React, { useMemo } from 'react';
import forexLogo from '../../img/forexLogo.png';
import PaweredBannerTable from '../SubCentralized/PaweredBannerTable';
import TextBannerTable from '../SubCentralized/TextBannerTable';
import TitleBannerTable from '../SubCentralized/TitleBannerTable';
import Logo from '../../img/logo.png';
import LogoStocks from '../../img/motion/Group3310.png'
import LogoCommodities from '../../img/motion/Group-3311.png'
import LogoEtf from '../../img/motion/Group3312.png'
import LogoIndices from '../../img/motion/Group3313.png'
import LogoCrypto from '../../img/motion/Group3314.png'
import { Box } from '@mui/material';
function BannerTableCForex({ azkoja = 'center' }) {
    // 
    const captionbanner = useMemo(() => {
        if (azkoja === 'center-forex') {
            return {
                TitleBanner: "Forex Trading",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: Logo,
                bgColor: '#0f0'
            }
        } else if (azkoja === 'center') {
            return {
                TitleBanner: "Forex Trading",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: Logo,
                bgColor: '#0f0'
            }
        } else if (azkoja === 'stocks') {
            return {
                TitleBanner: "Stocks Trading",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: LogoStocks,
                bgColor: '#A2A2A2'
            }
        } else if (azkoja === 'commodities') {
            return {
                TitleBanner: "Commodities",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: LogoCommodities,
                bgColor: '#CDA90D'
            }
        }
        else if(azkoja === 'etf') {
            return {
                
                TitleBanner: "ETF Trading",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: LogoEtf,
                bgColor: '#DC6805'
            }
        }
        else if (azkoja === 'Indices') {
            return {
                TitleBanner: "Indices",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: LogoIndices,
                bgColor: '#0073CF'
            }
        }
        else if (azkoja === 'crypto') {
            return {
                TitleBanner: "Crypto",
                TextBanner: "Lorem ipsum dolor sit amet,  ",
                image: LogoCrypto,
                bgColor: '#F7931A'
            }
        }
         else {
            return {
                TitleBanner: "Trading",
                TextBanner: "Lorem ipsum   ",
                image: LogoStocks,
                bgColor: '#000'
            }
        }
    }, [azkoja])
    return (
        <Box className='banner-forex-box' sx={{backgroundColor: captionbanner.bgColor}}>
            <div className="icon-banner-box">
                <img src={captionbanner.image} alt="forexLogo" className='icon-banner' />
            </div>
            <TitleBannerTable CaptionHeadBanner={captionbanner.TitleBanner} />
            <div className="banner-text-items">

                <TextBannerTable TextBannerTable={captionbanner.TextBanner} />
            </div>
            <div className="footer-baner-forex">
                <PaweredBannerTable />
                <img src={Logo} alt="logo" width={90} className='ms-3' />
            </div>

        </Box>
    )
}

export default BannerTableCForex