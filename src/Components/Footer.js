import React from 'react';
import {useNavigate } from 'react-router-dom'

const Footer = () => {
    const navgigate =useNavigate()

  return (
    <footer className="bg-black text-white py-8">
      <div className="container  mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col  lg:ml-20  lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">Our Offerings</h3>
          <ul>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>AI</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/4 mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-4">Global Citizenship</h3>
          <ul>
            <li>Safety</li>
            <li>Diversity and Inclusion</li>
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/4 mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          {/* <div className="flex mt-4">
            <a href="#" className="mr-4">Facebook</a>
            <a href="#" className="mr-4">Twitter</a>
            <a href="#">Instagram</a>
          </div> */}
        </div>
        <div className="flex flex-col lg:w-1/4 mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-4">Policies</h3>
          <ul>
            <li className='cursor-pointer' onClick={()=>navgigate('/cancellationPolicy')}>Privacy Policy</li>
            <li className='cursor-pointer' onClick={()=>navgigate('/emergencies')}>Emergency Policy</li>
            {/* <li><a href="/faq">FAQ</a></li> */}
            
          </ul>
        </div>
      </div>
      {/* <div className="mt-8 text-center">
        <h3 className="text-lg font-bold mb-4">Policies</h3>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/emergency-policy">Emergency Policy</a></li>
        </ul>
      </div> */}
    </footer>
  );
};

export default Footer;
