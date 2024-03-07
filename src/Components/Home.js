import React from 'react'
import HeroPage from './HeroPage'
import HeroSection2 from './HeroSection2'
import HeroSection3 from './HeroSection3'
import HeroSection4 from './HeroSection4'
import QRCode from './QRCode'

const Home = () => {
  return (
    <div>
      <HeroPage/>
   <HeroSection2/>
   <HeroSection3/>
   <HeroSection4/>
   <QRCode/>
    </div>
  )
}

export default Home
