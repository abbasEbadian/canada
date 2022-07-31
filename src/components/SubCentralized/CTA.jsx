import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function CTA() {
  return (
    <div className='container'>
        <div className="CTA-body">
            <span className="title-cta">List of all stocks and trading cost</span>
            <a href="" className='cta-link'>
              Click here
              <ChevronRightIcon/>
            </a>
        </div>
    </div>
  )
}

export default CTA