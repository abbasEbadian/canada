import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function SliderManagerItem({ showBorder }) {
  return (
    <div className="">
                        <div className="slider-manager-content">
                            <div className="img-manager-slider">
                                <div className="slider-manager-name-box">
                                    <span className="slider-manger-name">Johan Don</span>
                                </div>
                            </div>
                            <div className="slider-manager-content-border">
                                <div className="manager-info-box">
                                    <div className="manager-info-items">
                                        <span className="manager-info">Investers</span>
                                        <div className="line5125"></div>
                                        <span className={`manager-info  ${showBorder ? ' bordered ' : ''}` }>754152</span>
                        
                                    </div>
                                    <div className="manager-info-items">
                                        <span className="manager-info">AUM</span>
                                        <div className="line5125"></div>
                                        <span className={`manager-info ${showBorder ? ' bordered ' : ''}` }>75%</span>
                        
                                    </div>
                                    <div className="manager-info-items">
                                        <span className="manager-info">Returns</span>
                                        <span className="manager-info ms-2">(Last 12 month)</span>
                                        <div className="line5125"></div>
                                        <span className={`manager-info up ${showBorder ? ' bordered ' : ''}` }>75%</span>
                        
                                    </div>
                                    
                                    <div className="manager-info-items">
                                        <span className="manager-info">Investers</span>
                                        <div className="line5125"></div>
                                        <span className={`manager-info down ${showBorder ? ' bordered ' : ''}` }>7</span>
                        
                                    </div>
                                </div>
                                <div className="invest-manager-box">
                                    <span className="invest-manager">invest manager</span>
                                    <NavigateNextIcon/>

                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default SliderManagerItem