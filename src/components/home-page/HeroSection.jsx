import Marquee from 'react-fast-marquee';
import Brand1 from '../../assets/brand1.png';
import Brand2 from '../../assets/brand2.png';
import Brand3 from '../../assets/brand3.png';


export default function HeroSection() {
  return (
    <>
      {/* ======== Hero Section Start ======== */}
      <section className="bg-black text-white py-20">
        <div className="container mt-20 sm:mt-0 mx-auto flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 justify-between items-center h-full">
            {/* Left Content */}
            <div className="w-full lg:w-5/12">
              <h1 className=" text-5xl sm:text-7xl font-medium leading-tight">
                Expert to Digitalise Your{' '}
                <span>
                  <img className='w-[200px] sm:w-fit mt-2' src="/src/assets/hero-text.gif" alt="hero-text" />
                </span>
              </h1>
              <br />
              <p className="para-text">We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.</p>
              <br />
              <button className="flex items-center gap-2 py-4 px-5 rounded-full text-white btn-gradient">
                <span>
                  <img className="w-6" src="/src/assets/button-star.png" alt="button-star" />
                </span>
                Explore Now
              </button>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 overflow-hidden flex justify-center">
              <img className="scale-150 w-full h-full" src="/src/assets/hero-logo.gif" alt="hero-logo" />
            </div>
          </div>
          {/* Brands Marquee */}
          {/* <Marquee className="py-4 min-h-[200px]">
            <div className="flex-between">
              <img className="h-fit mx-8" src={Brand1} alt="" />
              <img className="h-fit mx-8" src={Brand2} alt="" />
              <img className="h-fit mx-8" src={Brand3} alt="" />
              <img className="h-fit mx-8" src={Brand1} alt="" />
              <img className="h-fit mx-8" src={Brand2} alt="" />
              <img className="h-fit mx-8" src={Brand3} alt="" />
            </div>
          </Marquee> */}
        </div>
      </section>
      {/* ======== Hero Section End ======== */}
    </>
  );
}
