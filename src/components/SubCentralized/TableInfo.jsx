import React from 'react'
import SortTable from './SortTable'
import TableTrade from './TableTrade'

function TableInfo() {
  return (
    <div>
        <div className="table-body">
            <div className="sort">
                <SortTable/>
            </div>
            <div className="table-box x5">
                {
                  Array.from({length: 10}).map((item, idx) => {
                    return <TableTrade key={idx}/>
                  })
                }
                <button className='show-more d-lg-none d-block'>Show more</button>
            </div>
        </div>
    </div>
  )
}

export default TableInfo