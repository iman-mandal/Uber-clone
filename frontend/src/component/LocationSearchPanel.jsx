import React from 'react';
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  const location = [
    "Mallabhum Institute of Technology, Bishnupur, West Bengal",
    "KG Engineering Institute, Bishnupur, West Bengal",
    "Mallabhum Institute of Polytechnic, Bishnupur, West Bengal"
  ];

  return (
    <div>
      {location.map((elem, index) => (
        <div onClick={()=>{
            props.setVehiclePanel(true);
            props.setPanelOpen(false)
        }}
          key={index}
          className="flex border-2 rounded-xl p-3 border-gray-100 active:border-black gap-4 my-2 items-center justify-start"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
