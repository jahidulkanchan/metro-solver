import React, { useState } from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import profile from '../assets/profile.png';
export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[9999] bg-dark-bg/50 backdrop-blur-lg shadow-md py-3 sm:py-4">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className='w-[100px] sm:w-fit' src={logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex bg-dark-bg px-8 py-4 rounded-full items-center space-x-8">
            <a href="#" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">
              About us
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-dark-bg rounded-md shadow-lg py-1 z-10" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-dark-bg">
                    Service 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-dark-bg">
                    Service 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-dark-bg">
                    Service 3
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">
              White label
            </a>

            <a href="#" className="text-white hover:text-slate-300 px-3 py-2 rounded-md text-sm font-medium">
              Contact us
            </a>
          </div>
          {/* Customer Profile */}
          <div className="profile-content hidden md:flex justify-center items-center gap-5">
            <div className="cart cursor-pointer"><img src={cart} alt="" /></div>
            <div className="profile cursor-pointer"><img src={profile} alt="" /></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
