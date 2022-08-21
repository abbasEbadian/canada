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
}
`
function SingleBlog({ }) {
  const { setLoading } = useContext(MasterContext)

  const { slug } = useParams()
  const navigate = useNavigate()

  const [blog, setBlog] = useState(undefined)

  useEffect(() => {
    if (!slug) return
    let blog_id = slug.split('-')
    const onlyIdPassed = blog_id.length === 1
    console.log(onlyIdPassed)
    blog_id = blog_id[0]
    setLoading(true)
    axios.get('api/v1/blogs/' + blog_id)
      .then(({ data: blog }) => {
        if (onlyIdPassed){
          navigate(`/blog/${blog?.id}-${blog?.title.toLowerCase().replace(/\s/g, '-')}`, {replace: true})
        }
        else {
          setBlog(blog)
        }
      })
      .catch(e => console.log(e))
      .finally(f => setLoading(false))

  }, [slug])
  return (
    <BlogDetail className='container'>
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
      <div className='blog-content' dangerouslySetInnerHTML={{
        __html: blog?.content
      }}></div>
    </BlogDetail>
  )
}

export default SingleBlog