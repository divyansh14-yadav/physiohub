import React from 'react'
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import PhysioLearning from '../components/physioLearning';
import OnDashbord from '../components/OnDashbord';
import Testinomial from '../components/Testinomial';
import Faq from '../components/Faq';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <PhysioLearning/>
        <OnDashbord/>
        <Testinomial/>
        <Faq/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home
