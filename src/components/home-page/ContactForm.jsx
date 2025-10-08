import { FaFacebookF, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import FormLogo from '../../../src/assets/logo.png';
import Starpng from '../../assets/button-star.png';

export default function ContactForm() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container">
          <div className="form-content flex flex-col-reverse lg:flex-row gap-10">
            <div className="left-content lg:w-4/12 bg-white/5 rounded-3xl">
              <div className="card py-20 space-y-12 text-center">
                <img src={FormLogo} alt="logo" className="logo w-fit mx-auto" />
                <h2 className="text-4xl md:text-5xl">Still Have A Questions?</h2>
                <ul className="social-icons w-fit mx-auto flex gap-3 mt-5">
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <FaLinkedinIn />
                  </li>
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <FaFacebookF />
                  </li>
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <RiInstagramFill />
                  </li>
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <FaXTwitter />
                  </li>
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <FaYoutube />
                  </li>
                  <li className="icon p-3 bg-gradient-to-r from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                    <FaTiktok />
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-content lg:w-8/12">
              <form className="form-content grid grid-cols-2 gap-x-5 gap-y-3.5">
                <div className="input-item col-span-2 md:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-0.5">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Enter your name..." />
                  </div>
                </div>
                <div className="input-item col-span-2 md:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Email Address
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-0.5">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Enter your email..." />
                  </div>
                </div>
                <div className="input-item col-span-2 md:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    WhatsApp/Phone
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-0.5">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Enter your number..." />
                  </div>
                </div>
                <div className="input-item col-span-2 md:col-span-1 flex flex-col gap-3">
                  <label htmlFor="services" className="text-md sm:text-lg md:text-lg">
                    Which are You Looking for Support in?
                  </label>
                  <div className="input-field relative rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-0.5">
                    <div className="absolute w-[10px] rounded-r  bg-dark-bg right-[3px] top-[2.3px] h-[calc(100%-4.5px)]"></div>
                    <select className="w-[calc(100%-10px)] outline-none bg-dark-bg px-3 py-3 rounded-l" name="services" id="services">
                      <option value="disable text-gray-600">Choose your services</option>
                      <option value="web-development">Web Development</option>
                      <option value="graphis-design">Graphics Design</option>
                      <option value="video-editing">Video Editing</option>
                    </select>
                  </div>
                </div>
                <div className="input-item  col-span-2  flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    How Can We Help?
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-0.5">
                    <textarea id="name" className="w-full min-h-[160px] md:min-h-[200px] h-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Message goes in here..." />
                  </div>
                  <button className="flex mt-4 items-center justify-center gap-2 py-4 px-5 rounded-full text-white btn-gradient">
                    <span>
                      <img className="w-6" src={Starpng} alt="button-star" />
                    </span>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
