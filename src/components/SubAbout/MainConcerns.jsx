import React from 'react'

function MainConcerns() {
    const CaptionName = {
        title: "At that duration we had three main concerns :",
        step1: "The Platform that is safe and secure",
        step2: "Be comfortable and accessible to all people, (which faced many investors opposition)",
        step3: "    Think of the customer and its constant profits and the principal investment (That is, the trading system and experience of our successful team over the years we have provided artificial intelligence to the public to invest in the best possible way)",
        textAbout1: "These three things made us make lots of effort to make something different, something that wasn't before, but we had great obstacles.",
    };
    return (
        <div className='main-concerns-body'>
            <div className="container">
                <div className="main-concerns-content">
                    <div className="col-lg-8 col-12">
                        <div className="main-concerns-box">
                            <span className="title-concerns">{CaptionName.title}</span>
                            <div className="main-concerns-step">
                                <span className="number-concerns">1.</span>
                                <span className="text-concerns">{CaptionName.step1}</span>
                            </div>
                            <div className="main-concerns-step">
                                <span className="number-concerns">2.</span>
                                <span className="text-concerns">{CaptionName.step2}</span>
                            </div>
                            <div className="main-concerns-step">
                                <span className="number-concerns">3.</span>
                                <span className="text-concerns">{CaptionName.step3}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12"></div>

                </div>
                <div className="about-main-concerns">
                    <p className="text-about-main-concerns">{CaptionName.textAbout1}
                        <br />
                        At that time, new DeFi platforms were raised, and it was virtually the possibility of building a decentralized platform only in theory, but in practice There were many problems!
                        High cost of the project, scientific research as well as the inefficiency of blockchain networks!


                    </p>
                    <p className="text-about-main-concerns">{CaptionName.textAbout2}</p>
                </div>
            </div>
        </div>
    )
}

export default MainConcerns