import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import './assets/css/style.css'
import HeroSlider from './pages/HeroSlider'
import AboutUs from './pages/AboutUs'
import Testimonial from './pages/Testimonial'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Training from './pages/Training'
import ScrollButton from './common/ScrollButton';
import Team from './pages/Team'
import Blog from './pages/Blog'

function App() {
  return (
    <div>
        <Header/>
        <HeroSlider/>
        <AboutUs/>
        <Services/>
        <Training/>
        <Resources/>
        <Blog/>
        <Team/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <ScrollButton />
    </div>
  )
}

export default App
