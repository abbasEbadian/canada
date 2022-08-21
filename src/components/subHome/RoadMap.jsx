// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import TitleHeadBroadcasts from '../TitleHeadBroadcasts';

import CheckIcon from '@mui/icons-material/Check';
import SyncIcon from '@mui/icons-material/Sync';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    const CaptionName = {
        protocol: "Protocol components",
        road: "Road Map",
        technology: "Technology"
    };

    const [roadmaps, setRoadmaps] = useState([])

    useEffect(() => {
        axios.get('/api/v1/roadmaps/')
            .then(({ data }) => {
                setRoadmaps(data.sort((a,b)=>a.sequence - b.sequence))
            })
            .catch(f => console.log(f))

    }, [])
    return (

        <div className="road-map-body " data-aos="zoom-in-up">
            <div className="title-Broadcasts-box text-center d-flex jcw aic">
                <button className='btn text-white bg-transparent'><ChevronLeft fontSize="large" className="border rounded-circle swiper-button-prev" /></button>
                <div>
                    <TitleHeadBroadcasts CaptionHead={CaptionName.road} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
                </div>
                <button className='btn text-white bg-transparent'><ChevronRight fontSize="large" className="border rounded-circle swiper-button-next" /></button>

            </div>
            <div className="row align-items-center w-100 px-4">
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
                    {roadmaps.map((roadmap, idx) => {
                        let [class1, class2, class3]= ["octagon-check ", "octagon-head-check ", "dec-octagon" ]
                        let icon = <CheckIcon />
                        if(roadmap.status === 'ongoing'){
                            class1 ="octagon-sync "
                            class2 = "octagon-head-sync"
                            icon =   <SyncIcon />
                        }else if(roadmap.status === 'pending'){
                            class1 ="octagon-accessTime"
                            class2 = "octagon-head-accessTime"
                            class3 = "dec-octagon-accessTime"
                            icon = <AccessTimeIcon />
                        }
                        return <SwiperSlide key={roadmap.id}>
                            <div className={`${class1} line0${idx+1}` }>
                                <div className={class2}>
                                    <span className="caption-octagon">{roadmap.title}</span>
                                    {icon}
                                </div>
                                <p className={class3}>
                                    {roadmap.content}
                                </p>

                            </div>

                        </SwiperSlide>
                    })}


                   
                </Swiper>
            </div>
        </div>

    )
};