import React from 'react'
import 'remixicon/fonts/remixicon.css'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehiclePanel(false)
                }}
                className='p-1 text-center absolute top-0 w-[90%]'>
                <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3>
            <div onClick={()=>{
                props.setConfirmRidePanel(true);
            }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
                <img className='h-12'
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    alt="car logo" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affodable , compact ride</p>
                </div>
                <h2 className='text-lg font-semibold'>$193</h2>
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true);
            }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
                <img className='h-12'
                    src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
                    alt="car logo" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
                    <h5 className='font-medium text-sm'>5 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affodable , motorcycle ride</p>
                </div>
                <h2 className='text-lg font-semibold'>$99</h2>
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true);
            }} className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
                <img className='ml-2 h-12'
                    src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
                    alt="car logo" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
                    <h5 className='font-medium text-sm'>7 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affodable , Auto ride</p>
                </div>
                <h2 className='text-lg font-semibold'>$150</h2>
            </div>

        </div>
    )
}

export default VehiclePanel
