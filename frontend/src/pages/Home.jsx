import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../component/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute left-2 top-2' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber" />
      <div onClick={() => {
        setVehiclePanel(false)
      }
      } className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="uber logo" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 relative bg-white'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute top-6 opacity-0 right-6 text-2xl'>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip : </h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder='Add a pick-up location '
            />
            <input
              className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              placeholder='Enter your Destination '
            />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <h5 
        onClick={()=>{
          setVehiclePanel(false)
        }}
        className='p-1 text-center absolute top-0 w-[90%]'>
          <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3>
        <div className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
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
        <div className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
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
        <div className='flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center p-3 justify-between'>
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
    </div>

  )
}

export default Home;
