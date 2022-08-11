import React from 'react'

function OurSupporters() {
    const CaptionName = {
        title: "Our supporters:",
        text:"Our community and all those who have spiritually supported this project will not need a sponsor until the future phases of the project! ",
        buttext:"But we welcome any intellectual help!"
    
      };
    return (
    <div className='container'>
        <div className="our-support">
            <span className="title-support">{CaptionName.title}</span>
            <p className="text-support">{CaptionName.text}</p>
            <span className="but-we-support">{CaptionName.buttext}</span>
        </div>
    </div>
  )
}

export default OurSupporters