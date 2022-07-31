import React from 'react'

function StartNow() {
  return (
    <div className='start-now-parent'>
      <div className='backs'>
        <div className="back"></div>
        <div className="back-reverse"></div>
      </div>
      <div className='container start-now'>
          <div className="start-now-box">
              <span className="text-start-now">Start now, be intelligent!</span>
              <a href="#" className='start-now-link'>Trade Now</a>
          </div>
      </div>
    </div>
  )
}

export default StartNow