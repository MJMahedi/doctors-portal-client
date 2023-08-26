import React from 'react'
import doctor from '../../assets/icons/doctor.png';
import healthcare from '../../assets/icons/healthcare.png';
import medicalAward from '../../assets/icons/medicalAward.png';
import paramedic from '../../assets/icons/paramedic.png';
import footer from '../../assets/images/footer.png';


/* <h4 className='text-center text-2xl w-full m-0	p-1'>Improve Health Care</h4>  */

const ContactUS = () => {
    return (
        <section>
            <div className="grid">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 content-center gap-x-16">


                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={doctor} alt="" />
                        <h3>Availability of medical services</h3>
                    </div>
                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={healthcare} alt="" />
                        <h3>Accessibility to medical facilities</h3>
                    </div>
                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={healthcare} alt="" />
                        <h3>Always Equality in health care</h3>

                    </div>
                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={paramedic} alt="" />
                        <h3>Safety of health care provision</h3>

                    </div>
                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={medicalAward} alt="" />
                        <h3>Efficiency in health care delivery</h3>
                    </div>
                    <div className="flex flex-row items-center justify-evenly border">
                        <img src={medicalAward} alt="" />
                        <h3>Efficiency in health care delivery</h3>
                    </div>
                </div>
            </div>
            <div style={{ background: `url(${footer})` }}>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-2xl font-bold text-primary">Contact US</h1>
                            <h1 className="text-5xl font-bold">Stay Connected with US </h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm ">
                            <div className="card-body">
                                <div className="form-control">

                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" placeholder="Subject" className="input input-bordered" />

                                </div>
                                <div className="form-control">

                                    <textarea placeholder="Your Message " class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUS
