import React from 'react'
import Banner from '../Comoponent/Banner'
import Elementor from '../Comoponent/Elementor'
import About from '../Comoponent/About'
import Services from '../Comoponent/Services'
import Doctors from '../Comoponent/Doctors'
import Process from '../Comoponent/Process'
import Blog from '../Comoponent/Blog'
import Appoinment from '../Comoponent/Appoinment'
import CustomBox from '../Common/CustomBox'

const Home = () => {
  return (
    <>
    <CustomBox component="main">
      <Banner />
      <Elementor />
      <About />
      <Services />
      <Doctors />
      <Process />
      <Appoinment />
      <Blog />
    </CustomBox>
    </>
  )
}

export default Home
