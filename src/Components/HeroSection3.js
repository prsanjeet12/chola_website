import React from 'react';
import img3 from '../images/img3.webp';

const Section = () => {
  return (
    <div className="flex  flex-col mt-40 lg:flex-row justify-center items-center">
      <div className="lg:w-[600px] px-6 lg:px-12 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 className="text-5xl font-bold mb-4">The Chola you know, reimagined for business</h2>
        <p className="text-lg mb-6">Chola for Business is a platform for
         managing global rides   for companies of any size..</p>
        <button className="bg-black text-white py-3 px-6 rounded-lg mb-6 hover:bg-gray-900">Get Started</button>
      </div>
      <div className="lg:ml-20">
        <img src={img3} alt="Your Image" className="lg:w-[490px] lg:h-[550px] h-auto lg:mr-40" />
      </div>
    </div>
  );
};

export default Section;
