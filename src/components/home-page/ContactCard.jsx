import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaHashtag } from 'react-icons/fa';

export default function ContactCard() {
  return (
    <div className="max-w-md mx-auto bg-card/90 text-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header Section */}
      <div className=" px-6 py-4">
        <h1 className="text-2xl font-bold text-white">#1 Metro solver</h1>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Address Section */}
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold  mb-1">Head office:</h3>
            <p className="leading-relaxed">
              Metro Solver Limited
              <br />
              Grantham Road, London E12 5LX,
              <br />
              United Kingdom
            </p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start space-x-3">
          <FaPhone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div className="space-y-1">
            <p className="">+447936 455446</p>
            <p className="">+447464850205</p>
          </div>
        </div>

        {/* Company Number */}
        <div className="flex items-start space-x-3">
          <FaHashtag className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
          <div>
            <p className="">02064844</p>
          </div>
        </div>
      </div>
    </div>
  );
}
