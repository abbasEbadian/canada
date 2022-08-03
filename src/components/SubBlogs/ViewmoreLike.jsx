import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function ViewmoreLike() {
    const TopNewsCaption={
    
        comment:"1,659",
        like:"1,659"
   

     
      };
    return (
    
        <div className="view-more-like">
            <div className="view-more">
                <button className='btn-view-more'>
                    View more
                    <KeyboardArrowRightIcon/>
                </button>
            </div>
            <div className="like-comment">
                <div className="comment-box">
                    < ChatBubbleOutlineIcon/>
                    <span className="comment">{TopNewsCaption.comment}</span>

                </div>
                <div className="like-box ms-3">
                    <FavoriteBorderIcon/>
                    <span className="like-top-news">{TopNewsCaption.like}</span>

                </div>
            </div>
        </div>
    
  )
}

export default ViewmoreLike