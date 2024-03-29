import React from 'react'

const InfoCard = ({ card }) => {
   
    const { name, description, icon, bgClass, alt } = card;

    return (
        <div className={`
        card card-side p-6 shadow-xl ${bgClass}  text-white 
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

export default InfoCard
