import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {get_image_link} from '../../App'
import styled from '@emotion/styled';

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`
function SliderManagerItem({ item, showBorder }) {
    return (
        <div className="">
            <div className="slider-manager-content">
                <div className="img-manager-slider position-relative">
                    <Image src={get_image_link(item?.image)} alt={item?.image_alt} />
                    <div className="slider-manager-name-box">
                        <span className="slider-manger-name">{item?.user_id?.first_name} { " " }{item?.user_id?.last_name} </span>
                    </div>
                </div>
                <div className="slider-manager-content-border">
                    <div className="manager-info-box">
                        <div className="manager-info-items">
                            <span className="manager-info">Investers</span>
                            <div className="line5125"></div>
                            <span className={`manager-info  ${showBorder ? ' bordered ' : ''}`}>{item?.total_invest}</span>

                        </div>
                        <div className="manager-info-items">
                            <span className="manager-info">AUM</span>
                            <div className="line5125"></div>
                            <span className={`manager-info ${showBorder ? ' bordered ' : ''}`}>{item?.AUM}%</span>

                        </div>
                        <div className="manager-info-items">
                            <span className="manager-info">Returns</span>
                            <span className="manager-info ms-2">(Last 12 month)</span>
                            <div className="line5125"></div>
                            <span className={`manager-info up ${showBorder ? ' bordered ' : ''}`}>{item?.returns}%</span>
                        </div>

                        <div className="manager-info-items">
                            <span className="manager-info">Investers</span>
                            <div className="line5125"></div>
                            <span className={`manager-info down ${showBorder ? ' bordered ' : ''}`}>{item?.investers}</span>

                        </div>
                    </div>
                    <div className="invest-manager-box">
                        <span className="invest-manager">invest manager</span>
                        <NavigateNextIcon />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderManagerItem