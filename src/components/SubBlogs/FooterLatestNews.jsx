import React from 'react'
import PaginationSize from './pagination'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
function FooterLatestNews() {
  return (
    <div className='footer-latest-news'>
        
        <PaginationSize />
        <div className="left-right">
            <button className=''> <ArrowCircleLeftOutlinedIcon fontSize='large'/></button>
            <button className=''> <ArrowCircleRightOutlinedIcon fontSize='large'/></button>
        </div>

    </div>
  )
}

export default FooterLatestNews