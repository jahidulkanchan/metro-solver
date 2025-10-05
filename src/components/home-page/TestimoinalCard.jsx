import React from 'react';
import { FaStar, FaGoogle } from 'react-icons/fa';

export default function TestimonialCard() {
  return (
    <div className="max-w-md mx-5  md:mx-8 bg-card text-white rounded-xl shadow-lg overflow-hidden p-6">
      {/* Header with Avatar and Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">KJ</div>
        <div>
          <h3 className="font-semibold">Katie Johnson</h3>
          <p className="text-sm">Founder of Strava</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <div className="mb-4">
        <p className="leading-relaxed">
          Metro Solver with Mixer was the best
          <br />
          solution. I am very satisfied with the team
          <br />
          and the work they did. I am sincerely
          <br />
          grateful for the work and effort.
        </p>
      </div>

      {/* Google Review Badge */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <FaGoogle className="w-5 h-5 text-blue-600" />
          <span className="text-sm">Google Review</span>
        </div>
        <span className="text-sm">by google</span>
      </div>
    </div>
  );
}
