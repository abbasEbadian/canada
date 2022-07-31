import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HeadFreeEducation from './HeadFreeEducation';
function FreeEducationConsult() {
    const datafreeeducation={
        data1:"13 June 2022"
       
    };
    return (
    <div>
        <div className="container">
            <div className="head-silder-free-education">
                <HeadFreeEducation/>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="free-education-consult-body">
                        <div className="free-education-consult-img">
                            
                        </div>
                        <div className="free-education-content">
                            <span className="title-free-education">Free education consult</span>
                            <p className="text-free-education">
                                our professional advisor are here to help You to design Your portfolio, strategy and diminish your trading mistake...
                            </p>

                        </div>
                        <a href="" className='more-free-education'><ChevronRightIcon/></a>
                    </div>
                    <div className="data-education-box">
                        <span className="data-freee-ducation">{datafreeeducation.data1}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FreeEducationConsult