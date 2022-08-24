import React from 'react'

function OurCompany() {
    const CaptionName = {
        title: "Welcome to Intelligent Broker ",
        text: " It was about 2017 that the first spark of the idea of building a distinctive and different platform came to our mind! We gathered a group of investors and investment managers to build a platform that we adore. A platform that does not contain any problem that we are dealing with, such as keeping and forgetting a variety of passwords, Country restrictions, trading time limitation and asset security.  ",
        ourcompany: "Our company"
    };
    return (
    <div className='our-company-body'>
        <div className="container">
            <div className="our-company-items">
                <button className='title-button'>{CaptionName.ourcompany}</button>
                <span className="title-our-company">{CaptionName.title}</span>
                <p className="text-our-company">{CaptionName.text}</p>
            </div>
        </div>

    </div>
  )
}

export default OurCompany