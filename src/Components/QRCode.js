import React from 'react';
import QRCode from 'react-qr-code';

const Section = () => {
  return (
    <div className="bg-gray-200 mt-40 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">It’s easier in the apps</h2>
        
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-4 lg:mr-4
         flex items-center">
          <QRCode value="https://www.example.com/chola-app"
         size={220}
          className="mr-4" />
          <p className="text-[19px] font-bold text-black">Download the Chola App</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg lg:ml-4 flex items-center">
          <QRCode
           value="https://www.example.com/driver-app"
         
           size={220}
          
          className="mr-2" />
          <p className="text-[19px] font-bold text-black">Download the Driver App</p>
        </div>
      </div>
    </div>
  );
};

export default Section;