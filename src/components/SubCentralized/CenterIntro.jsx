import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const Dynamic = styled.div`
    .dynamic{
        top: 40%;
        left: 10%;

    }
    .swiper-button-next, .swiper-button-prev{
        top: 95%;
        transform: scale(0.7);
        z-index: 11;
    }
    @media (max-width: 992px){
        .dynamic{
            top: 60%;
            left: unset;
            text-align: center;
        }
    }
`
const DynamicContent = styled.div`
    color: white;
    
    .MuiInputBase-root{
        background: white;

    }
`
function CenterIntro({ slides }) {
    return (
        <Dynamic>
            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            // onSlideChange={(active) => setActivePost(postList[active.realIndex])}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination
        >
            {Array.from({ length: 3 }).map((post, idx) => {
                const n = ['first_slide_content', 'second_slide_content', 'third_slide_content']
                const _d = slides[n[idx]]
                return <SwiperSlide key={idx} className="position-relative">
                    <div className="top-news-img">
                        {/* <Link to={`/blog/${post?.id}-${post.title?.replace(/\s/g, '-')}`} className='position-absolute inset-0'></Link> */}
                        <picture  width={"100%"}>
                            <source media="(max-width:992px)" srcSet="img/mobile/slide1.png"  />
                            <img src="img/slide1.png" className="text-center" alt="features" width={"100%"}/>
                        </picture>
                    </div>
                    <Box className='container  position-absolute dynamic' >
                        <DynamicContent className="col-lg-5 col-12">
                            <div dangerouslySetInnerHTML={{
                                __html: _d
                            }}></div>
                            {idx === 0&& <FormControl sx={{ m: 1, width: '50%' , minWidth: "300px"}} variant="outlined" className='d-none d-lg-block'>
                                <OutlinedInput

                                    id="outlined-adornment-password"
                                    // value={values.password}
                                    // onChange={handleChange('password')}
                                    placeholder='search'
                                    size={"small"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                // onClick={handleClickShowPassword}
                                                // onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>}
                        </DynamicContent>
                    </Box>
                </SwiperSlide>
            })}

        </Swiper>
        </Dynamic>
    )
}

export default CenterIntro