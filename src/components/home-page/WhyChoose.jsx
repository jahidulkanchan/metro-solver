import Project1 from '/src/assets/image.png';
import Project2 from '/src/assets/image1.png';
import Project3 from '/src/assets/image2.png';
import Project4 from '/src/assets/image3.png';
import Project5 from '/src/assets/image4.png';
import Project6 from '/src/assets/image5.png';
import Project7 from '/src/assets/image6.png';
import Project8 from '/src/assets/image7.png';
import Project9 from '/src/assets/image8.png';
import Project10 from '/src/assets/image9.png';
import Project11 from '/src/assets/image10.png';
import Project12 from '/src/assets/image11.png';
import Project13 from '/src/assets/image12.png';
import Project14 from '/src/assets/image13.png';
import Marquee from 'react-fast-marquee';
import star from '/src/assets/button-star.png';

export default function WhyChoose() {
  return (
    <>
      <section className="bg-black text-white py-20 relative">
        <div className="bg-circle-shape right-0 top-[-200px] absolute h-[800px] w-[800px] mx-auto  blur-3xl z-[10] bg-main/30 rounded-full"></div>
        <div className="bg-circle-shape left-0 bottom-[200px] absolute h-[800px] w-[800px] mx-auto  blur-3xl z-[10] bg-main/30 rounded-full"></div>
        <div className="container mt-20 sm:mt-0 mx-auto flex flex-col justify-between">
          <div className="heading-text text-center md:text-left md:flex  mb-10">
            <h2 className="text-3xl md:text-6xl font-medium">Our Latest Works</h2>
            <p className="paratext mt-1 md:mt-3 max-w-xl mx-auto">
              Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business.
            </p>
          </div>
          {/* Project Showcase */}
          <Marquee>
            <div className="flex-between gap-10 mx-10">
              <img src={Project1} alt="" />
              <img src={Project2} alt="" />
              <img src={Project3} alt="" />
              <img src={Project4} alt="" />
              <img src={Project5} alt="" />
            </div>
          </Marquee>
          <br />
          <br />
          <Marquee direction="right">
            <div className="flex-between gap-10 mx-10">
              <img src={Project6} alt="" />
              <img src={Project7} alt="" />
              <img src={Project8} alt="" />
              <img src={Project9} alt="" />
            </div>
          </Marquee>
          <br />
          <br />
          <Marquee>
            <div className="flex-between gap-10 mx-10">
              <img src={Project10} alt="" />
              <img src={Project11} alt="" />
              <img src={Project12} alt="" />
              <img src={Project13} alt="" />
              <img src={Project14} alt="" />
            </div>
          </Marquee>{' '}
          <br />
          <br />
          <div className="flex flex-col mt-20 lg:flex-row gap-14 lg:gap-0 justify-between items-center h-full">
            {/* Left Content */}
            <div className="w-full lg:w-5/12">
              <h1 className=" text-5xl sm:text-7xl font-medium leading-tight">Why You Choose Metro Solver?</h1>
              <br />
              <p className="para-text">
                We are constantly growing or learning and improving.Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
              </p>
              <br />
              <button className="flex items-center gap-2 py-4 px-5 rounded-full text-white btn-gradient">
                <span>
                  <img className="w-6" src={star} alt="button-star" />
                </span>
                Book Now
              </button>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 h-full flex justify-center">
              <div className="capusle-items flex justify-center items-center flex-col space-y-14">
                <div className="capsule w-fit -rotate-6 bg-gradient-to-r from-[#0A111C] to-[#1A1A30]  px-8 rounded-full py-5 text-2xl md:text-5xl font-medium">Cancel Anytime</div>
                <div className="capsule w-fit rotate-6 bg-gradient-to-r from-[#0A111C] to-[#1A1A30]  px-8 rounded-full py-5 text-2xl md:text-5xl font-medium">24/7 Customer Service</div>
                <div className="capsule w-fit -rotate-6 bg-gradient-to-r from-[#0A111C] to-[#1A1A30]  px-8 rounded-full py-5 text-2xl md:text-5xl font-medium">Refers & Earn</div>
                <div className="capsule bg-gradient-to-r from-[#0A111C] to-[#1A1A30]  px-8 rounded-full py-5 text-2xl md:text-5xl font-medium">Money Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
