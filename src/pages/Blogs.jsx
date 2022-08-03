import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShowMore from '../components/ShowMore';
import LatestNews from '../components/SubBlogs/LatestNews';
import PopularNews from '../components/SubBlogs/PopularNews';
import TopNews from '../components/SubBlogs/TopNews';
import WelcomeNewsroom from '../components/SubBlogs/WelcomeNewsroom';

function Blogs() {
    const CaptionName={
    
        manager:"Find The Best Manager",
     
      };
    return (
    <div>
        <Header/>
        {/* Welcome Newsroom */}
        <WelcomeNewsroom/>
        {/* Top news */}
        <TopNews/>
        {/* slider Popular News */}
        <PopularNews/>
        {/* Latest News */}
        <LatestNews/>
        <ShowMore/>
        <Footer/>
    </div>
  )
}

export default Blogs