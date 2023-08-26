import React from 'react'

const Review = ({ review }) => {
    return (
       
        <div class="card lg:max-w-lg shadow-lg shadow-cyan-500/50">
            <div class="card-body">
           
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quisquam aliquam architecto, veritatis voluptate libero?</p>
                <div  className='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
