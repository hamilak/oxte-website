import React from 'react'
import Navbar from '../components/Navbar'
import MainInformation from '../components/MainInformation'
import Business from '../components/Business'
import Footer from '../components/Footer'
import ThirdSection from '../components/ThirdSection'

const Home = () => {
  return (
    <div className='bg-color1'>
        <Navbar />
        <div className='mx-16'>
          <MainInformation />
        </div>
        <div>
        <Business />
        <ThirdSection />
        <Footer />
        </div>
    </div>
  )
}

export default Home