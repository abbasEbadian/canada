import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import { MasterContext } from '.';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShowMore from '../components/ShowMore';
import LatestNews from '../components/SubBlogs/LatestNews';
import NewsSlider from '../components/SubBlogs/NewsSlider';
import TopNews from '../components/SubBlogs/TopNews';
import WelcomeNewsroom from '../components/SubBlogs/WelcomeNewsroom';


function Blogs() {
    const [ blogs, setBlogs ] = useState([])
    const { setLoading} = useContext(MasterContext)

    useEffect(() => {
      setLoading(true)
      axios.get('http://localhost:8000/api/v1/blogs/')
      .then(({data})=>{
        setBlogs(data)
      })
      .catch(f=>console.log(f))
      .finally(f => setLoading(false))
    }, [])
    
   
    return (
    <div>
        <Header/>
        <WelcomeNewsroom/>
        <TopNews postList={blogs}/>
        <NewsSlider postList={blogs} title="Popular news" class_prepend={"popular_news"} />
        <NewsSlider postList={blogs} title="Latest news" class_prepend={"latest_news"} />
        {/* <ShowMore/> */}
        <Footer/>
    </div>
  )
}

export default Blogs