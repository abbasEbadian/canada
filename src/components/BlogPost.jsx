import React from 'react'
import { Link } from 'react-router-dom'
import postImage from '../img/blog/fgd.png'

function BlogPost({data}) {
    return (
        <div className="info-blog-post">
            <div className="up-section-info-post">
                <Link to={"/blog/posts/" + data.id}>
                    <img src={postImage} alt="post-pic" download />
                </Link>
              
                {/* <div className="text-left readMore">
                    <Link to={"/blog/posts/" + data.id}>
                        <p>ادامه مطلب...</p>
                    </Link>
                </div> */}
            </div>
            <div className="down-section-info-post">
            <h6>{data.name}</h6>
                <p>{data.textBlog}</p>
                {/* <div className="publisher">
                    <p>
                        <i className="bi bi-person"></i>
                        {data.publisher}
                    </p>
                </div> */}
                <div className="date-publish">
                    {new Date().toLocaleDateString("en-US")}
                </div>
            </div>
        </div>
    )
}

export default BlogPost