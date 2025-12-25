import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='flex right-2 top-2 fixed bg-white h-10 w-10 justify-center rounded-full items-center'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="uber logo" />
            </div>
            <div className="h-1/2 p-4">
                <div className='flex gap-2 justify-between items-center flex-col'>
                    <div className='flex w-full items-center justify-between'>
                        <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car img" />
                        <div className='text-right'>
                            <h2 className='text-lg font-medium'>Rahul</h2>
                            <h4 className='font-semibold -mt-1 -mb-1 text-xl'>WB25GB4578</h4>
                            <p className='text-sm text-gray-600'>Maruti suzuki aulto</p>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='flex items-center p-3 border-b-2'>
                            <i className="text-lg re-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-AB</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kg Engeering Institute</p>
                            </div>
                        </div>
                        <div className='flex items-center p-3'>
                            <i className="text-lg re-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>$193.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 p-2 rounded-lg bg-green-600 text-white font-semibold'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
