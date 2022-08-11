import React from 'react'
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import imgBlog from "../img/blog/Image-9.png"
function SingleBlog() {
  const TopSingleBlog = {
    titlePrevSb: "Zero BTC Trading Fees: They Do What They Say on the Tin",
    mainTakeaways: {
      mainTakeawaysTitle: "Main Takeaways",
      mainTakeaways1: "Binance has introduced them as part of our dedication to low fees.",
      mainTakeaways2: "Our zero-fee BTC trading pairs do exactly what they say. No hidden cost and no restructuring of our business model to compensate. ",
    },
    contentBlog1: "If you haven’t heard already, then you’re in for a treat. Binance has recently removed trading fees from thirteen BTC spot pairs available on the exchange. Sounds too good to be true? Well, it really isn’t. We thought we’d take the time to explain in more detail how the new policy works and clear up a few misconceptions along the way.So, when it comes to zero trading fees at Binance, it really does do what it says on the tin.",
    contentBlog2: "If you haven’t heard already, then you’re in for a treat. Binance has recently removed trading fees from thirteen BTC spot pairs available on the exchange. Sounds too good to be true? Well, it really isn’t. We thought we’d take the time to explain in more detail how the new policy works and clear up a few misconceptions along the way.So, when it comes to zero trading fees at Binance, it really does do what it says on the tin.",
    contentBlog3: "It’s also a great symbolic move. Crypto and blockchain really began with Bitcoin, and what better way to remove fees than with the coin that is foundational to the industry? For many new investors, it’s the first coin they buy. It’s also the most traded asset by volume. By introducing zero fees for common BTC pairs, we hope to share the benefits of fee-free trading with as many people as possible.",
    titleContentblog: "Why Are We Introducing Zero Fees for BTC Spot Trading?"
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-1">
          <div className="bk-singb text-white">
            <Link to="#">
              <ChevronLeftIcon />
            </Link>
          </div>
        </div>
        <div className="col-9 p-0">
          <div className="prev-news-sb">
            <Link to="#">
              {TopSingleBlog.titlePrevSb}
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
        <div className="col-lg-12">
          <div class="protocol-component-body">
            <div className=" protocol-component-item-blog p-4 h-auto">
              <h3 className='text-white fw-bold'>
                {TopSingleBlog.mainTakeaways.mainTakeawaysTitle}
              </h3>
              <ul className='mt-3'>
                <li>
                  <p>
                    {TopSingleBlog.mainTakeaways.mainTakeaways1}
                  </p>
                </li>
                <li>
                  <p>
                    {TopSingleBlog.mainTakeaways.mainTakeaways2}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="content-blog">
            <img src={imgBlog} alt="" />
            <p>
              {TopSingleBlog.contentBlog1}
            </p>
            <h5 className='text-white fw-bold mt-5 '>
              {TopSingleBlog.titleContentblog}
            </h5>
            <p>
              {TopSingleBlog.contentBlog2}
            </p>
            <p>
              {TopSingleBlog.contentBlog3}
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="content-blog">
            <img src={imgBlog} alt="" />
            <p>
              {TopSingleBlog.contentBlog1}
            </p>
            <h5 className='text-white fw-bold mt-5 '>
              {TopSingleBlog.titleContentblog}
            </h5>
            <p>
              {TopSingleBlog.contentBlog2}
            </p>
            <p>
              {TopSingleBlog.contentBlog3}
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleBlog