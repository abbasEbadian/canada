import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HeadFreeEducation from './HeadFreeEducation';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper';
function FreeEducationConsult() {
    const datafreeeducation={
        data1:"13 June 2022"
       
    };
    const nextElClass = `.free-education .swiper-button-back `
    const prevElClass = `.free-education .swiper-button-front `
    return (
        <div className="container mb-5 free-education">
            <div className="head-silder-free-education">
                <HeadFreeEducation/>
            </div>
            <Swiper
                spaceBetween={20}
                modules={[Navigation]}
                // onSwiper ={e => slideChange({activeIndex: 0})}
                
                navigation={{
                    nextEl: nextElClass,
                    prevEl: prevElClass,
                }}
                // onSlideChange={slideChange}
                breakpoints={{
                    320: {
                        slidesPerView: 1.4,
                        spaceBetween: 10,
                    },
                    460: {
                        slidesPerView: 1.8,
                    },
                     620: {
                        slidesPerView: 2,
                    },
                    990: {
                        slidesPerView: 2.5,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400:{
                        slidesPerView: 4,
                    }
                }}
            >
                 {
                    Array.from({length : 9}).map((slide, idx) => {
                        return <SwiperSlide key={idx}> <div className="" >
                        <div className="free-education-consult-body">
                            <div className="free-education-consult-img">
                                
                            </div>
                            <div className="free-education-content">
                                <span className="title-free-education">Free education consult</span>
                                <p className="text-free-education">
                                    our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake...
                                </p>
    
                            </div>
                            <a href="" className='more-free-education'><ChevronRightIcon/></a>
                        </div>
                        <div className="data-education-box">
                            <span className="data-freee-ducation">{datafreeeducation.data1}</span>
                        </div>
    
                    </div></SwiperSlide>
                    })
                 }
            </Swiper>
        </div>
  )
}

export default FreeEducationConsult
