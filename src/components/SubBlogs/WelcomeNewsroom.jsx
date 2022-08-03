import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NewsPaper from '../../img/newspaper.png';
function WelcomeNewsroom() {
  return (
    <div className="welcome-newsroom-body">
        <div className='container'>
            <div className="d-flex align-items-end flex-wrap">
                <div className="col-12 col-lg-4 order-mobile2">
                    <div className="search-blogs-box">
                        <button className='btn-search-blogs'><SearchIcon/></button>
                        <input type="text" className='search-blogs-input' placeholder='Search in Blogs...' />
                        
                    </div>
                </div>
                <div className="col-12 col-lg-4 order-mobile1">
                    <div className="welcome-newsroom">
                        <div className="welcome-newsroom-img">
                            <img src={NewsPaper} alt="NewsPaperlogo" />
                        </div>
                        <span className="welcome-newsroom-text">
                            Welcome to Newsroom
                        </span>
                    </div>
                </div>
                <div className="col-12 col-lg-4 order-mobile3"></div>
            </div>

        </div>
    </div>
  )
}

export default WelcomeNewsroom