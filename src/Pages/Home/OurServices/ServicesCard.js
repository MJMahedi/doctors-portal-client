import React from 'react'

const ServicesCard = ({ card }) => {
  const { name, description, icon, alt } = card;


  return (
    <div className={`
    card p-6 shadow-lg shadow-cyan-500/50  flex justify-center
     ` }>
      <figure>
        <img src={icon} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>

        <p>{description}</p>
      </div>

    </div>
  )
}

export default ServicesCard
