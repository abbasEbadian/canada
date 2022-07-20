import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function MobileSearch() {
  return (
    <div className='search-box'>
        <input type="text" placeholder='Search...' />
        <SearchIcon fontSize="large" />
    </div>
  )
}
