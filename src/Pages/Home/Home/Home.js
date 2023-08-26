import React from 'react'
import Banner from '../Banner/Banner'
import InfoCards from '../InfoCards/InfoCards'
import OurServices from '../OurServices/OurServices'
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Testimonial from '../Testimonial/Testimonial'
import ContactUS from '../ContactUS'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <OurServices></OurServices>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUS></ContactUS>
      <Footer></Footer>

    </div>
  )
}

export default Home
