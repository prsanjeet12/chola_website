import React from 'react';
import img3 from '../images/iamge1.webp';

import logo from '../images/cholaLogo2.png';

const Section = () => {
  return (
    <div className=" bg-[#b9b4ed] ">
      <nav className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-[120px] " />
          <ul className="hidden md:flex  text-[20px]  font-sans font-semibold space-x-16">
  <li className="text-gray-100 hover:text-gray-300">
    <siv >Ride</siv>
  </li>
  <li className="text-gray-100 hover:text-gray-300">
    <div >Drive</div>
  </li>
  <li className="text-gray-100 hover:text-gray-300">
    <div >Business</div>
  </li>
  <li className="text-gray-100 hover:text-gray-300">
    <div>About</div>
  </li>
</ul>
        </div>
        {/* Here you can add any additional navbar items */}
      </nav>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12">
        <div className="lg:w-[600px] px-6 lg:px-12 mt-6 lg:mt-0 text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-4 text-white">Go anywhere with Chola</h2>
          <div className="mt-8 flex flex-col items-left">
        <input type="text" placeholder="Enter location" 
        className="border
         border-gray-300 rounded-md px-4 py-2 mb-4 w-[350px] lg:h-[60px]" />
        <input type="text" placeholder="Enter destination" className="border w-[350px] lg:h-[60px] border-gray-300 rounded-md px-4 py-2 mb-4" />
        <button className="bg-black text-white
         py-3  w-40  rounded-lg hover:bg-gray-900">See Prices</button>
      </div>
       
        </div>
        <div className="lg:ml-20 mt-8 lg:mt-0">
          <img src={img3} alt="Your Image" className="lg:w-[490px]
           lg:h-[550px] lg:mb-20 h-auto lg:mr-40" />
        </div>
      </div>
     
    </div>
  );
};

export default Section;