import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import BlogPost from '../components/BlogPost';
import iconbloghead from '../img/blog/Group-1139.png'
import { Link } from 'react-router-dom'
import topnews from '../img/blog/fgd.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';



function Blog() {
  const [blogPosts, setBLogPosts] = React.useState([
    {
      id: 1,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },
    {
      id: 2,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"

    },
    {
      id: 3,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"

    },
    {
      id: 4,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"

    },


  ]);
  const [blogPosts2, setBLogPosts2] = React.useState([
    {
      id: 1,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },
    {
      id: 2,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },
    {
      id: 3,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },
    {
      id: 4,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },
    {
      id: 4,
      name: "Free educationconsult news 2",
      textBlog:
        "our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake.",
      img: "fgd"
    },


  ]);

  const [topic, settopic] = React.useState('');
  // const [blogs, setblogs] = React.useState('');
  const [topnewsTitle, settopnewsTitle] = React.useState([
    {
      title: "Crypto",
      title2: "free educationonsult news 2 ",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ])
  const handleChange = (event) => {
    settopic(event.target.value);
  };
  return (
    <>
      <section className='content-head-blog'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12">
              <div className="bg-head-icon text-center py-4">
                <img src={iconbloghead} width={70} alt="" />
              </div>
            </div>
            <div className="col-3">
              <Box sx={{ minWidth: 120, backgroundColor: "#fff", borderRadius: "30px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select topic</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={topic}
                    // label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="col-5 text-center">
              <h1 className='text-white '>Welcome to Newsroom</h1>
            </div>
            <div className="col-3">
              <Box sx={{ display: 'flex', alignItems: 'flex-end', borderRadius: '20px', backgroundColor: '#fff' }}>
                <SearchIcon sx={{ mr: 1, my: 1 }} />
                <TextField id="input-with-sx" label="seacrh blogs" variant="filled" />
              </Box>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-top-news mb-5'>
        <div className="container">
          <div className="row">
            <div className='topNews p-4'>
              <div className="col-12 d-flex align-items-center justify-content-between mb-3">
                <p className='text-white m-0 fs-5'>Top news</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>
              </div>
              <div className="d-flex">
                <div className="col-lg-8">
                  <Link to="#">
                    <img src={topnews} alt="topnews" className='w-100' />
                  </Link>
                </div>
                <div className="col-lg-4 px-3 py-4">
                  <div className="info-top-news-title">
                    {topnewsTitle.map((item, idx) => {
                      return (
                        <>
                          <p className='nameTop'>
                            {item.title}
                          </p>
                          <span className='nameTop2'>
                            {item.title2}
                          </span>
                          <div className="date-publish text-start">
                            {new Date().toLocaleDateString("en-US")}
                          </div>
                          <p className='content-info-Tnews mt-3'>
                            {item.content}
                          </p>
                        </>
                      )
                    })}
                  </div>
                  <div className="col-12 mt-5">
                    <div className="more-action-Tnews">
                      <div className='viewMore'>
                        <Link to="#">
                          <p>
                            view more <ChevronRightIcon />
                          </p>
                        </Link>
                      </div>
                      <div className="review-like-Tnews">
                        <div className='me-4'>
                          <Link to="#">
                            <FavoriteBorderIcon />
                            <span >1,659</span>
                          </Link>
                        </div>
                        <div>
                          <Link to="#">
                            <ChatBubbleOutlineIcon />
                            <span className='ms-1'>
                              1,4557
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="row ">
            <Swiper pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={4}
              modules={[Navigation]}
              navigation
              autoplay={true}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
                1600: {
                  slidesPerView: 4,
                },
              }}>
              {blogPosts2.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <BlogPost data={item} />
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row align-items-start">
            <div className="col-md-12 flex-blog order-1">
              {blogPosts.map((item, idx) => {
                return (
                  <div className="col-md-6 col-lg-3 col-12 p-2 blog-cards" key={idx}>
                    <BlogPost data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog