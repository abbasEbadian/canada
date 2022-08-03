import React from 'react'
import DataBox from './DataBox';
import HeadPopularNews from './HeadPopularNews'

function PopularNews() {
    const CaptionName={
        cpation:"Free educationconsult news 2",
        textDEC:"our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
        data:"Juane 13, 2022"
    };
    return (
    <div className='container'>
        
        <HeadPopularNews/>
        <div className="slider-popular-news-box">
            <div className="col-lg-3">
                <div className="slider-popular-news-items">
                    <div className="img-popular-news"></div>
                    <div className="content-popular-news">
                        <span className="cpation-news-popular">{CaptionName.cpation}</span>
                        <p className="text-news-popular">
                            {CaptionName.textDEC}
                        </p>
                        <DataBox TitleData={CaptionName.data}/>
                    </div>
                   

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default PopularNews