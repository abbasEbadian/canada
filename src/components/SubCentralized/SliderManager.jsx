import React, { useMemo } from 'react'
import HeadSlider from './HeadSlider'
import SliderManagerItem  from './SliderManagerItem';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper';
import useMediaQuery from '@mui/material/useMediaQuery';

function SliderManager({managers, _class, showBorder }) {
    
    const desktop = useMediaQuery('(min-width:990px)');
    const tablet = useMediaQuery('(max-width:990px)');
    const mobile = useMediaQuery('(max-width:576px)');

    const threshold = useMemo( () => {
        if(mobile) return 1 
        if(tablet) return 2  
        if(desktop) return 3 
    }, [tablet, mobile, desktop])

    const slideChange = ({activeIndex}) =>{
        Array(...document.querySelectorAll(`.${_class} .swiper-slide`)).map((slide, idx) =>{
            if( Math.abs( (activeIndex) - idx) >= threshold ){
                slide.classList.add("swiper-slide-fade")
            }else{
                slide.classList.remove("swiper-slide-fade")
            }
        })
    }
    const nextElClass = `.${_class} .swiper-button-back `
    const prevElClass = `.${_class} .swiper-button-front `

  return (
    <div className={_class} >
            <div className="head-slider-manager container">
                <HeadSlider/>
            </div>
            <div className="slider-manager-box">

            <Swiper
                spaceBetween={20}
                modules={[Navigation]}
                centeredSlides={true}
                onSwiper ={e => slideChange({activeIndex: 0})}
                
                navigation={{
                    nextEl: nextElClass,
                    prevEl: prevElClass,
                }}
                onSlideChange={slideChange}
                breakpoints={{
                    320: {
                        slidesPerView: 1.4,
                        spaceBetween: 10,
                    },
                    460: {
                        slidesPerView: 1.8,
                    },
                     620: {
                        slidesPerView: 2.4,
                    },
                    990: {
                        slidesPerView: 3.6,
                    },
                    1200: {
                        slidesPerView: 4.4,
                    },
                    1400:{
                        slidesPerView: 5.4,
                    }
                }}
            >
                 {
                    managers.map((manager) => {
                        return <SwiperSlide key={manager.id}><SliderManagerItem  item={manager} showBorder={showBorder}/></SwiperSlide>
                    })
                 }
            </Swiper>

        </div>

    </div>
  )
}

export default SliderManager