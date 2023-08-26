import React from 'react'

const Service = ({ service }) => {
const {name , slots} = service;
    return (
        <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
            
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length
                        ? <span>{slots[0]} </span>
                        : <span className='text-red-500'>No Slot AValiable</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avaliable </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Book Appointment </button>
                </div>
            </div>
        </div>
    )
}

export default Service
