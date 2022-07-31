import React from 'react'
import HeadSlider from './HeadSlider'
import SliderManagerItem  from './SliderManagerItem';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper';

function SliderManager({ _class, showBorder }) {
    const ref = React.useRef()
    const slideChange = ({activeIndex}) =>{
        const win_size = window.innerWidth
        if(win_size >= 1200){
                Array(...document.querySelectorAll(`.${_class} .swiper-slide`)).map((slide, idx) =>{
                    if( Math.abs( (activeIndex) - idx) >=3 ){
                        slide.classList.add("swiper-slide-fade")
                    }else{
                        slide.classList.remove("swiper-slide-fade")
                    }
                })
            
        }
    }
    const nextElClass = `.${_class} .swiper-button-front `
    const prevElClass = `.${_class} .swiper-button-back `

  return (
    <div className={_class} >
            <div className="head-slider-manager container">
                <HeadSlider/>
            </div>
            <div className="slider-manager-box">

            <Swiper
                spaceBetween={30}
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
                        slidesPerView: 1.6,
                        spaceBetween: 0,
                    },
                    460: {
                        slidesPerView: 2.6,
                    }, 620: {
                        slidesPerView: 3.6,
                    },
                    990: {
                        slidesPerView: 4.6,
                    },
                    1200: {
                        slidesPerView: 5.6,
                    }
                }}
            >
                 {
                    Array.from({length : 9}).map((slide, idx) => {
                        return <SwiperSlide key={idx}><SliderManagerItem  showBorder={showBorder}/></SwiperSlide>
                    })
                 }
            </Swiper>

        </div>

    </div>
  )
}

export default SliderManager