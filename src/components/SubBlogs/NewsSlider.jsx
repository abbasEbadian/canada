import React from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import styled from '@emotion/styled';
 const SwiperDiv = styled.div``
const Slide = styled.div`
    position: relative;
    > a{
        position: absolute;
        inset: 0;
        z-index: 2;
    }
`
function NewsSlider({ postList, title, class_prepend, parallax = false }) {

    const onChange = ({ activeIndex }) => {
        Array(...document.querySelectorAll(`.${class_prepend} .swiper-slide`)).map((slide, idx) => {
            activeIndex = activeIndex % (postList.length)
            idx = idx % (postList.length)
            const val1 = Math.abs(activeIndex - idx)
            const val = Math.min(val1, postList.length - val1)
            const deg = 1 - (val * 0.075)
            slide.style.transform = `scale(${deg})`;
            const deg2 = 1 - (val * 0.15)
            slide.style.opacity = deg2;

        })
    }

    return (
        <SwiperDiv className='container mb-5'>

            <div className='w-100'>
                <div className="heading d-flex align-items-center my-5 my-lg-4">
                    <div className="col-lg-4 col-12">
                        <div className="left-right " >
                            <button className={class_prepend + ' swiper-button-front'}> <ArrowCircleLeftOutlinedIcon fontSize={'large'} /></button>
                            <div className="title-Broadcasts-box text-center mb-lg-5 d-block d-lg-none">
                                <h5 className='title-head'>{title}</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                            </div>
                            <button className={class_prepend + ' swiper-button-back'}> <ArrowCircleRightOutlinedIcon fontSize={'large'} /></button>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="title-Broadcasts-box text-center">
                            <h5 className='title-head'>{title}</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">

                    </div>


                </div>
            </div>
            <div className={"slider-popular-news-box " + class_prepend}>
                <Swiper
                    spaceBetween={20}
                    onSlideChange={parallax ? onChange : undefined}
                    loop={parallax}
                    centeredSlides={parallax}
                    centeredSlidesBounds
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        }, 430: {
                            slidesPerView: 1.5,
                        }, 576: {
                            slidesPerView: 2,
                        }, 768: {
                            slidesPerView: 2.5,
                        }, 992: {
                            slidesPerView: 3,
                        }, 1200: {
                            slidesPerView: 4
                        }, 1400: {
                            slidesPerView: 5
                        },
                    }}
                    navigation={{
                        nextEl: `.${class_prepend}.swiper-button-back`,
                        prevEl: `.${class_prepend}.swiper-button-front`,
                    }}
                    modules={[Navigation]}
                >
                    {postList && postList.map(post => {
                        return <SwiperSlide key={post.id}>
                            <Slide className="slider-popular-news-items">
                                <Link to={`/blog/${post.id}-${post.title.replace(/\s/g, '-')}`}></Link>
                                <div className="img-popular-news" >
                                    <img src={post.image} alt={post.image_alt} />
                                </div>
                                <div className="content-popular-news">
                                    <span className="cpation-news-popular">{post.title}</span>
                                    <span className="text-news-popular " dangerouslySetInnerHTML={{
                                        __html: post.summary
                                    }}>

                                    </span>
                                    <div className='d-flex align-items-end justify-content-between'>
                                        <div className='text-white'>
                                            <small>by: <br /></small>
                                            intelligent
                                        </div>
                                        <span className='text-white-50 data-text w-100 text-end pb-1'>
                                            {new Date(post.created).toLocaleDateString('en', { year: "numeric", month: "long", day: '2-digit' })}
                                        </span>
                                    </div>

                                </div>
                            </Slide>
                        </SwiperSlide>
                    })}

                </Swiper>

            </div>

        </SwiperDiv>
    )
}

export default NewsSlider