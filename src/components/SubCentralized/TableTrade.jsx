import React from 'react'
import Chart from '../../img/Chart.png'

function TableTrade() {
  const data = {
    name : 'EURO/Uso',
  }
  return (
      <div className="table-items">
        <div className='currency'>
          <span className="title-table">{data.name}</span>
          <span className="value-table">10098</span>
          <i></i>
        </div>
        <img src={Chart} alt="chart" width={50} className="me-lg-5"/>
        <div className="action">
          <button className="btn-table me-lg-3">Buy</button>
          <button className='btn-table'>Sell</button>
        </div>
        
   
      </div>

  )
}

export default TableTrade