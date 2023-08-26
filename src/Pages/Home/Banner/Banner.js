import React from 'react';
import hcbgImage from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200" style={{
      backgroundImage: 'url(' + hcbgImage + ')',
      backgroundSize: "cover",
      borderRadius:"25px",
    }} >

      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={require('../../../assets/images/chair.png')}
          alt="logo" className="lg:max-w-md rounded-lg  shadow-2xl "
        />
        <div className=''>
          <h1 className="text-5xl font-bold">Your New Smile Starts <br />  Here...</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
