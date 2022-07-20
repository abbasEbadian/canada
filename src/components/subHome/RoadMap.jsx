// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper';
import TitleHeadBroadcasts from '../TitleHeadBroadcasts';

import CheckIcon from '@mui/icons-material/Check';
import SyncIcon from '@mui/icons-material/Sync';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

export default () => {
    const CaptionName = {
        protocol: "Protocol components",
        road: "Road Map",
        technology: "Technology"
    };
    return (

        <div className="road-map-body">
            <div className="title-Broadcasts-box text-center d-flex jcw aic">
                <button className='btn text-white bg-transparent'><ChevronLeft fontSize="large" className="border rounded-circle swiper-button-prev" /></button>
                <div>
                    <TitleHeadBroadcasts CaptionHead={CaptionName.road} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                </div>
                <button className='btn text-white bg-transparent'><ChevronRight fontSize="large" className="border rounded-circle swiper-button-next" /></button>
                
            </div>
            <div className="row align-items-center">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320: {
                            centeredSlides: true,
                            slidesPerView: 2,
                        }, 480: {
                            centeredSlides: true,
                            slidesPerView: 3,
                        }, 640: {
                            slidesPerView: 4
                        }, 992: {
                            slidesPerView: 5
                        }, 1200: {
                            slidesPerView: 6
                        },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide><div className="">
                        <div className="octagon-check line01">
                            <div className="octagon-head-check">
                                <span className="caption-octagon">Phase 1</span>
                                <CheckIcon />

                            </div>
                            <p className="dec-octagon">
                                Lorem ipsum dolor sit amet, consectetur
                            </p>


                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <div className="octagon-check line02">
                                <div className="octagon-head-check">
                                    <span className="caption-octagon">Phase 1</span>
                                    <CheckIcon />

                                </div>
                                <p className="dec-octagon">
                                    incididunt ut labore et dolore magna
                                </p>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <div className="octagon-sync line03">
                                <div className="octagon-head-sync">
                                    <span className="caption-octagon">Phase 1</span>
                                    <SyncIcon />

                                </div>
                                <p className="dec-octagon">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <div className="octagon-accessTime line04">
                                <div className="octagon-head-accessTime">
                                    <span className="caption-octagon">Phase 1</span>
                                    <AccessTimeIcon />

                                </div>
                                <p className="dec-octagon-accessTime">
                                    sunt in culpa qui officia deserunt mollit
                                </p>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <div className="octagon-accessTime line05">
                                <div className="octagon-head-accessTime">
                                    <span className="caption-octagon">Phase 1</span>
                                    <AccessTimeIcon />

                                </div>
                                <p className="dec-octagon-accessTime">
                                    sed do eiusmod tempor incididunt ut
                                </p>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <div className="octagon-accessTime line06">
                                <div className="octagon-head-accessTime">
                                    <span className="caption-octagon">Phase 1</span>
                                    <AccessTimeIcon />

                                </div>
                                <p className="dec-octagon-accessTime">
                                    sunt in culpa qui officia deserunt
                                </p>


                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
};