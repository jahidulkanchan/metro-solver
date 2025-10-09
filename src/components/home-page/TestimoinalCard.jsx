import { FaStar, FaGoogle } from 'react-icons/fa';

export default function TestimonialCard() {
  return (
    <div className="max-w-md md:mx-8 group cursor-pointer bg-white/5 relative text-white z-0 rounded-xl shadow-lg overflow-hidden p-6">
      <div className="absolute duration-300 ease rotate-[23deg] -z-[3] left-[-50px] top-[-50px] bg-blue-bg/30 opacity-0 group-hover:opacity-80 blur-2xl w-[100px] h-full"></div>
      <div className="absolute duration-300 ease rotate-[23deg] -z-[1] right-[-50px] bottom-[-50px] bg-blue-bg/50 opacity-0 group-hover:opacity-80 blur-3xl w-[100px] h-full"></div>
      {/* Header with Avatar and Info */}
      <div className="content z-[9]">
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
    </div>
  );
}
