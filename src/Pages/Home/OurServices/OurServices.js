import React from 'react'
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import ServicesCard from './ServicesCard'

const OurServices = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem ipsum dolor sit amet.',
            icon: fluoride,
            bgClass: 'bg-gradient-to-r from-accent to-secondary',
            alt: 'mark1'
        },
        {
            id: 2,
            name: 'Cavity Filing',
            description: 'Lorem ipsum dolor sit amet.',
            icon: cavity,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            alt: 'mark2'
        },
        {
            id: 3,
            name: 'whitening',
            description: 'Lorem ipsum dolor sit.+8801753258523',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-primary to-accent',
            alt: 'mark3'
        },
    ]
    return (
        <div className='b-3 shadow-2xl'>
            <div className='text-center'>
                <h1 className='p-8 text-3xl text-center font-bold text-primary'>Our Services</h1>
                <h1 className='text-accent text-5xl text-center font-bold'>Service we Provide </h1>

            </div>

            <div>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    cardData.map(card => <ServicesCard
                        key={card.id}
                        card={card}
                    ></ServicesCard>)
                }
            </div>
            <div className="hero bg-base-200 lg:p-36">
                <div className="hero-content flex grid grid-cols-1 lg:grid-cols-2">
                   <div className='flex justify-around	'>
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" /> </div>
                    <div className='justify-around'>
                        <h1 className="text-5xl font-bold">Exceptional Dental care on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurServices
