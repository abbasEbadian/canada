import React from 'react'
import Apple from '../../img/apple.png'
import Bitcoin from '../../img/bitcoin.png'
import ChartValue from '../../img/ChartValue.png'
import Chart from '../../img/Chart.png'
import IconAwesome from '../../img/IconAwesome.png'
function AssetsCentralized() {
  return (
    <div>
        <div className="assets-body">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="assets-card">
                  <div className="assets-bitcoin">
                    <img src={Bitcoin} alt="Bitcoin"  height={50}/>
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box">
                      <span className="name-assets">Bitcoin</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box mb-3">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>
                    <img src={ChartValue} alt="ChartValue" className='img-chart' />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
              <div className="assets-card">
                  <div className="assets-etherium">
                    <img src={IconAwesome} alt="IconAwesome" height={50} />
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box ">
                      <span className="name-assets">Etherium</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box  mb-3">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>
                    <img src={ChartValue} alt="ChartValue" className='img-chart' />
                  </div>
                  
                </div>
              </div>
              <div className="col-12 col-lg-4">
              <div className="assets-card">
                  <div className="assets-apple">
                    <img src={Apple} alt="Apple" height={50} />
                  </div>
                  <div className="value-assets-body">
                    <div className="value-assets-box">
                      <span className="name-assets">Apple</span>
                      <span className="value-assets">24,456$</span>
                    </div>
                    <div className="value-assets-box  mb-3">
                      <span className="value-assets">CHG</span>
                      <span className="value-assets">VOL</span>
                    </div>
                    <img src={ChartValue} alt="ChartValue" className='img-chart' />
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AssetsCentralized