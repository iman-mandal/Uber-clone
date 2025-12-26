import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/expressive-woman-posing-outdoor_344912-3079.jpg?semt=ais_hybrid&w=740&q=80" alt="Driver photo" />
            <h4 className='text-lg font-medium'>Payal Sharma</h4>
          </div>
          <div>
            <h4 className='text-lg font-semibold'>$254</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex g-4 mt-6 p-3 bg-gray-100 rounded-xl items-start justify-center'>
          <div className='text-center px-2'>
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>2.5</h5>
            <p className='text-sm text-gray-600'>Hours online</p>
          </div>
          <div className='text-center px-2'>
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>2.5</h5>
            <p className='text-sm text-gray-600'>Hours online</p>
          </div>
          <div className='text-center px-2'>
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>2.5</h5>
            <p className='text-sm text-gray-600'>Hours online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
