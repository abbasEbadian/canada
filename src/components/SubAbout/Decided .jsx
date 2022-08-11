import React from 'react'
import decision from '../../img/IMG-1.png'
function Decided() {
    return (
        <div className='decided-body'>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-6 col-12 d-flex order-lg-2 order-1">
                        <img className="mx-auto" src={decision} alt="Decision" />
                    </div>
                    <div className="col-lg-6 col-12 order-lg-1 order-2">
                        <div className="decided-aitems">
                            <p className="text-decided">
                                We decided to come up with our idea, but because it was a new idea and we wanted to get centralized markets like the stock market and make artificial intelligence to make customers profit, we didn't get much attention!We decided to continue our path and s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decided 