import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <div>
                <h5
                    onClick={() => {
                        props.setWaitingForDriver(false)
                    }}
                    className='p-1 text-center absolute top-0 w-[90%]'>
                    <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
                </h5>
                <div className='flex items-center justify-between'>
                    <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car img" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Rahul</h2>
                        <h4 className='font-semibold -mt-1 -mb-1 text-xl'>WB25GB4578</h4>
                        <p className='text-sm text-gray-600'>Maruti suzuki aulto</p>
                    </div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver
