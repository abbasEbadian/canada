import { Box } from '@mui/material'
import React from 'react'
import SortTable from './SortTable'
import TableTrade from './TableTrade'
import useMediaQuery from '@mui/material/useMediaQuery';

function TableInfo() {
  const matches = useMediaQuery('(max-width:990px)');
  const [showAll, setShowAll] = React.useState(false)
  const length = 10
  return (
    <div>
        <div className="table-body">
            <div className="sort">
                <SortTable/>
            </div>
            <div className='table-parent'>
              <Box className="table-box x5">
                  {
                    Array.from({length}).map((item, idx) => {
                      if(showAll || (!showAll && idx < 4) || !matches)
                        return <TableTrade key={idx}/>
                    })
                  }
                  
              </Box>
              <button className='show-more d-lg-none d-block' onClick={e => setShowAll(!showAll)}>Show { showAll? 'less': 'more'}</button>
            </div>
        </div>
    </div>
  )
}

export default TableInfo