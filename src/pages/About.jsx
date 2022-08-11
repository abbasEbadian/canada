import React from 'react'
import Header from '../components/Header'
import Decided from '../components/SubAbout/Decided '
import ITG from '../components/SubAbout/ITG'
import MainConcerns from '../components/SubAbout/MainConcerns'
import OurCompany from '../components/SubAbout/OurCompany'
import OurMission from '../components/SubAbout/OurMission'
import OurPartners from '../components/SubAbout/OurPartners'
import OurSupporters from '../components/SubAbout/OurSupporters'
import OurTeam from '../components/SubAbout/OurTeam'
import RoadMap from '../components/subHome/RoadMap'
import FrequentlyQuestions from '../components/SubAbout/FrequentlyQuestions'
import SimpleAccordion from '../components/SubAbout/FrequentlyQuestions'
import Footer from '../components/Footer'
function About() {
  return (
    <div>
        <Header/>
        {/* Our company */}
        <OurCompany/>
        {/* Main Concerns */}
        <MainConcerns/>
        {/* Decided */}
        <Decided/>
        {/* ITG */}
        <ITG/>
        {/* Our mission */}
        <OurMission/>
        {/* Our team */}
        <OurTeam/>
        {/*our partners */}
        <OurPartners/>
        {/* Our supporters */}
        <OurSupporters/>
        {/* Road map */}
        <RoadMap/>
        {/* Frequently Questions */}
        <SimpleAccordion/>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default About