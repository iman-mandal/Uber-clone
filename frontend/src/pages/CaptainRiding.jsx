import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='h-screen relative'>
            <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
                <Link to='/home' className='flex fixed bg-white h-10 w-10 justify-center rounded-full items-center'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="uber logo" />
            </div>
            <div className='h-1/5 p-6 flex relative items-center justify-between bg-yellow-400'>
                <h5 className='p-1 text-center absolute top-0 w-[93%]'>
                    <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
                </h5>
                <h4 className='text-xl font-semibold'>4 km away</h4>
                <button
                    className='w-full flex justify-center mt-5 p-2 rounded-lg bg-green-600 text-white font-semibold'>
                    Complete Ride
                </button>
            </div>

        </div>
    )
}

export default CaptainRiding
