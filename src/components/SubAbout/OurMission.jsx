import React from 'react'
import TitleHeadBroadcasts from '../TitleHeadBroadcasts'
import PC from '../../img/PC.png'
import Safe from '../../img/Safe.png'
function OurMission() {
    const CaptionName = {
        mission: "Our mission",
        textmission: "Our mission is summarized in two things ",
        technology: "Technology",
        textSafe:"Creating a safe space and no need to trust for different market trading",
        textPC:"To use (most up to date) technology to (minimize) customer loss and profit (continuous)",
        readRtificial:"Click here to read more about our artificial intelligence",
        textExtraMission2:"But the problem is not knowledge, the problem is that few people are looking for genuine knowledge For years, we have been thinking about creating artificial intelligence so that can help you 24 hour consultant, you will be in the investment path!Artificial intelligence designed by the most professional capital managers and your supporter, guidance and savior in the transactions!",
        textExtraMission:"In recent years, there have been many scams around the world, systems that have cruelly destroyed people's money and we have tried to eliminate the role (need) trust in financial markets using smart contracts. Is a great goal, but it is worth fighting (lets go for an example) Investing a cause, such as medicine, engineering, etc. is the reason for the disadvantage of the people, lack of knowledge!"
      };
    return (
    <div className='container'>
        <div className="title-Broadcasts-box text-center">
            <TitleHeadBroadcasts CaptionHead={CaptionName.mission} />
            <span className="text-Our-mission">{CaptionName.textmission}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>

        </div>
        <div className="row mt-lg-5">
          <div className="col-12 col-lg-6">
            <div className="our-mission-items">
              <div className="safe-img-our-mission">
                <img src={Safe} alt="safeIcon" width={50} />
              </div>
              <div className="content-our-mission">
                
                <p className="dec-our-mission">
                  {CaptionName.textSafe}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="our-mission-items">
              <div className="pc-img-our-mission">
                <img src={PC} alt="PCIcon" width={48}/>
              </div>
              <div className="content-our-mission">
                
                <p className="dec-our-mission">
                  {CaptionName.textPC}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="text-extra-mission-box">
              <p className="text-extra-mission">
                {CaptionName.textExtraMission}
              </p>
              <p className="text-extra-mission">
                {CaptionName.textExtraMission2}
              </p>
              <a href="" className='read-rtificial'>
                {CaptionName.readRtificial}
                
              </a>
            </div>
          </div>
        </div>
  
    </div>
  )
}

export default OurMission