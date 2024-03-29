import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id:1 ,
            name: 'Opening-hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-accent to-secondary',
            alt:'mark1'
        },
        {
            id:2 ,
            name: 'Visit our locations',
            description: 'MJ HOUSE Dhaka 1216 ,Bangladesh ',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            alt:'mark2'
        },
        {
            id:3 ,
            name: 'Contact us now',
            description: '+8801753258523 01746402080',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-accent',
            alt:'mark3'
        },
    ]
  return (
    <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {
        cardData.map(card => <InfoCard
        key={card.id}
        card={card}
        ></InfoCard>)
       
      }
    </div>
  )
}

export default InfoCards
