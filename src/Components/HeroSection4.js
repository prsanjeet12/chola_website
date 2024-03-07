import React from 'react';
import img2 from '../images/img5.webp'

const Section = () => {
  return (
    <div className="flex flex-col mt-40 lg:flex-row justify-center items-center">
      <div className=" lg:ml-20">
        <img src={img2} alt="Your Image" className="lg:w-[490px] lg:h-[550px]
         h-auto lg:mr-40" />
      </div>
      <div className="lg:w-[600px]  px-6 lg:px-12 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4">Make money by renting out your car</h2>
        <p className="text-lg mb-6">Make money on your schedule with deliveries or
         rides—or both. You can use your own car or choose a
          rental through Chola.</p>
        <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900">Get Started</button>
      </div>
    </div>
  );
};

export default Section;