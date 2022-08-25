import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function TopNews({ postList }) {
    const [activePost, setActivePost] = useState({})

    useEffect(() => {
        setActivePost(postList && postList[0])
    }, [postList])
    return (
        <div className='container'>
            <div className="top-news-body">
                <div className="head-top-news">
                    <span className="title-head-top-news">
                        Top news
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                </div>
                <div className="top-news-items row">
                    <div className="col-12 col-lg-8 col-xxl-7">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            onSlideChange={(active) => setActivePost(postList[active.realIndex])}
                            onSwiper={(swiper) => console.log(swiper)}
                            modules={[Navigation, Pagination, A11y]}
                            navigation
                            pagination
                        >
                            {postList && postList.map(post => {
                                return <SwiperSlide key={ListItem.id}>
                                    <div className="top-news-img position-relative">
                                        <Link to={`/blog/${post?.id}-${post.title?.replace(/\s/g, '-')}`} className='position-absolute inset-0'></Link>
                                        <img src={post?.image} alt={post?.image_alt} ></img>
                                    </div>
                                </SwiperSlide>
                            })}

                        </Swiper>

                    </div>
                    <div className="top-news col-12 col-lg-4 col-xxl-5">
                        <div className="top-news-content">
                            <h4 className='text-white'>{activePost?.title}</h4>
                            <br />
                            <p className='text-secondary'
                                dangerouslySetInnerHTML={{
                                    __html: activePost?.summary
                                }}></p>
                        </div>
                        <div className="view-more-like">
                            <div className="view-more">
                                <Link to={`/blog/${activePost?.id}-${activePost?.title?.replace(/\s/g, '-')}`} className='btn-view-more'>
                                    View more
                                    <KeyboardArrowRightIcon />
                                </Link>

                            </div>
                            <div className="like-comment">
                                <div className="comment-box">
                                    < ChatBubbleOutlineIcon />
                                    <span className="comment">{activePost?.comment || 0}</span>

                                </div>
                                <div className="like-box ms-3">
                                    <FavoriteBorderIcon />
                                    <span className="like-top-news">{activePost?.like || 0}</span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNews