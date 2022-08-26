import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Routes, Route, useParams } from 'react-router-dom';
import { MasterContext } from '.';
import axios from 'axios';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsSlider from '../components/SubBlogs/NewsSlider';

const SinglePressPage = styled.section`
  min-height: 100vh;
  display: flex;flex-direction: column;
  .footer-public{
    margin-top: auto;
  }
`
const BlogDetail = styled.div`
.bt-social-sb,
.bk-singb,
.prev-news-sb {
  background-color: #001730;
  padding: 15px 0;
  text-align: center;
}
.prev-news-sb a {
  color: #fff;
}
.bt-social-sb {
  border-radius: 0 30px 30px 0;
  display: flex;
  justify-content: space-around;
}
.bk-singb {
  border-radius: 30px 0 0 30px;
}
.blog-content{
  color: white;
  background: #001730;
  border: 1px solid #40677077;
}
.protocol-component-item{
  min-height: unset;
}
`
function SinglePress({ }) {
  const { setLoading } = useContext(MasterContext)

  const { slug } = useParams()
  const navigate = useNavigate()

  const [blog, setBlog] = useState(undefined)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (!slug) return
    
    let blog_id = slug.split('-')
    const onlyIdPassed = blog_id.length === 1
    blog_id = blog_id[0]
    setLoading(true)

    axios.get('api/v1/blogs/?nofilter=1' )
      .then(({ data: blogs }) => {
        const blog = blogs.find(i=>+i.id === +blog_id)
        if(blog?.category_id?.title !== 'press') {
          navigate(`/404`, { replace: false })
          return
        }
        if (onlyIdPassed) {
          navigate(`/press/${blog?.id}-${blog?.title.toLowerCase().replace(/\s/g, '-')}`, { replace: true })
        }
        else {
          setBlogs(blogs)
          setBlog(blog)
        }
      })
      .catch(e => console.log(e))
      .finally(f => setLoading(false))

  }, [slug])
  return (
    <SinglePressPage>
      <Header />
      <BlogDetail className='container my-5'>
        <div className="row mb-5">
          <div className="col-1">
            <div className="bk-singb text-white">
              <Link to="/blog">
                <ChevronLeftIcon />
              </Link>
            </div>
          </div>

          <div className="col-9 p-0">
            <div className="prev-news-sb">
              <Link to="#">
                {blog?.title}
              </Link>
            </div>
          </div>
          <div className="col-2">
            <div className="bt-social-sb">
              <Link to="#">
                <ShareIcon />
              </Link>
              <Link to="#">
                <ThumbUpOffAltIcon />
              </Link>
              <Link to="#">
                <ThumbDownOffAltIcon />
              </Link>
            </div>
          </div>


        </div>
        <div className="col-lg-12 mb-4">
          <div class="protocol-component-body">
            <div className=" protocol-component-item blog p-4 pb-2 ">
              <h6 className='text-white fw-bold'>
                Main Takeaways
              </h6>
              <ul className='mt-3 text-white'>
                <li>
                  <p className='text-white-50'>
                    Binance has introduced them as part of our dedication to low fees.
                  </p>
                </li>
                <li>
                  <p className='text-white-50'>
                    Our zero-fee BTC trading pairs do exactly what they say. No hidden cost and no restructuring of our business model to compensate.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='blog-content p-4 rounded' dangerouslySetInnerHTML={{
          __html: blog?.content
        }}></div>
      </BlogDetail>
      <NewsSlider postList={blogs} class_prepend={'single_blog_slider'} title={""} parallax/>
      <Footer />
    </SinglePressPage>
  )
}

export default SinglePress