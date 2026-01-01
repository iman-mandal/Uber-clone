import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const ConfirmRidePopUp = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setRidePopUpPanel(false)
                }}
                className='p-1 text-center absolute top-0 w-[90%]'>
                <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
            </h5>
            <h3 className="text-2xl font-semibold">Confirm this Ride to Start</h3>
            <div className='flex items-center justify-between mt-4 bg-yellow-200 rounded-lg p-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 object-cover rounded-full' src="https://m.media-amazon.com/images/I/51sHict9JGL._AC_UF894,1000_QL80_.jpg" alt="User img" />
                    <h2 className='text-lg font-medium'>Iman Mandal</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between items-center flex-col'>
                <div className='w-full mt-5'>
                    <div className='flex items-center p-3 border-b-2'>
                        <i className="text-lg re-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Mallabhum Institute of Technology</p>
                        </div>
                    </div>
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
                    <div className='mt-6 w-full'>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                        }}>
                            <input type="text"
                                className='bg-[#eeee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3'
                                placeholder='Enter OTP'
                            />
                            <Link to='/captain-riding' className='w-full flex justify-center mt-5 p-2 rounded-lg bg-green-600 text-white font-semibold'>
                                Confirm
                            </Link>
                            <button onClick={() => {
                                props.setRidePopUpPanel(false)
                            }} className='w-full mt-3 p-2 rounded-lg bg-red-400 text-white font-semibold'>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
