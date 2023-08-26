import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointBanner from './AppointBanner';
import AvaliableAppoint from './AvaliableAppoint';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
     <AppointBanner date={date} setDate={setDate}></AppointBanner>
     <AvaliableAppoint date={date}></AvaliableAppoint>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
