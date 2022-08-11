import React from 'react'
import itg_img from '../../img/IMG-2.png'
function ITG() {
    const CaptionName = {
        title: "Finally, in 2021",
        text:"by expanding the decentralized financial system and completing the project's artificial intelligence, we decided to create the world's latest investment platform with the personal capital we gained over the years.Something that has been a"
    };
    return (
    <div className='container itg'>
        <div className="row">
            <div className="col-12 col-lg-6 d-flex">
                <img className="img-ITG mx-auto" src={itg_img}></img>
            </div>
            <div className="col-12 col-lg-6">
                <div className="ITG-items">
                    <span className="title-ITG">
                        {CaptionName.title}
                    </span>
                    <p className="text-ITG">
                        {CaptionName.text}
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ITG