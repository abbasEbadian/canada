import React from 'react'
import partner1 from '../../img/logoXOH.png'
import partner2 from '../../img/dark-horizontal.png'
import partner3 from '../../img/wormhole_crehan.png'
import partner4 from '../../img/open_sesame_lig.png'
function OurPartners() {
  const CaptionName = {
    titleparners: "Some of our partners:"


  };
  return (
    <div className='our-partners-body'>
        <div className="container">
            <div className="our-partners-items">
                <span className="title-parners">
                  {CaptionName.titleparners}
                </span>
                <div className="our-partners">
                    <img src={partner1} alt="partnerLogo" width={190} />
                    <img src={partner2} alt="partnerLogo" width={190} />
                    <img src={partner3} alt="partnerLogo" width={190} />
                    <img src={partner4} alt="partnerLogo" width={190} />
                    <i></i>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurPartners