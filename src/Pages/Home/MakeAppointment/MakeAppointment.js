import React from 'react'
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className="mt-20 " 
        style={{background:`url(${appointment})`}}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" lg:-mt-36 lg:w-1/2 rounded-lg " alt='' />
                    <div>
                    <h4 className=' text-lg text-primary font-bold '>Appointment</h4>
                        <h1 className="text-white text-4xl font-bold">Make an appointment today</h1>
                        <p className="text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeAppointment
