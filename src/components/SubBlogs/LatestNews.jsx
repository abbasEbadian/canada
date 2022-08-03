import React from 'react'
import TitleHeadBroadcasts from '../TitleHeadBroadcasts';
import DataBox from './DataBox';
import FooterLatestNews from './FooterLatestNews';
import ViewmoreLike from './ViewmoreLike';

function LatestNews() {
    const CaptionName={
    
        title:"Latest News",
        TextSliderLatestNews:"our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
        titleSliderLatestNews:"Free educationconsult news 2",
        data:"Juane 13, 2022",
        titlenews:"Free education onsult news 2",
        cyptoLatestNewsDec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cyptoLatestNewsDec2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Crypto:"Crypto",
        data:"21 Julay 2022"


     
      };
    return (
    <div>
        <div className="title-Broadcasts-box text-center mb-lg-5 my-3 my-lg-0">
            <TitleHeadBroadcasts CaptionHead={CaptionName.title}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300"/></svg>

        </div>
        <div className="container">
            <div className="slider-latest-news">
                <div className="col-lg-3">
                    <div className="slider-latest-news-items">
                        <div className="img-slider-latest-news"></div>
                        <div className="slider-latest-news-content">
                            <span className="title-slider-latest-news">{CaptionName.titleSliderLatestNews}</span>
                            <p className="text-slider-latest-news">
                                {CaptionName.TextSliderLatestNews}
                            </p>
                            <DataBox TitleData={CaptionName.data}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="cypto-latest-news-body">
                <div className="col-12 col-lg-4 order-mobile2">
                    <div className="cypto-latest-news">
                        <div className="cypto-latest-news-content">
                            <span className="crypto">{CaptionName.Crypto}</span>
                            <span className="title-news">{CaptionName.titlenews}</span>
                            <span className="data-text">{CaptionName.data}</span>
                            <p className="text-news">{CaptionName.cyptoLatestNewsDec}</p>
                            <p className="text-news">{CaptionName.cyptoLatestNewsDec2}</p>
                        </div>
                        <ViewmoreLike/>
                        
                    </div>
                </div>
                <div className="col-12 col-lg-8 order-mobile1">
                    <div className="img-cypto-latest-news"></div>
                </div>
                
            </div>
            <div className="slider-latest-news">
                <div className="col-lg-3">
                    <div className="slider-latest-news-items">
                        <div className="img-slider-latest-news"></div>
                        <div className="slider-latest-news-content">
                            <span className="title-slider-latest-news">{CaptionName.titleSliderLatestNews}</span>
                            <p className="text-slider-latest-news">
                                {CaptionName.TextSliderLatestNews}
                            </p>
                            <DataBox TitleData={CaptionName.data}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <FooterLatestNews/>
        </div>
    </div>
  )
}

export default LatestNews