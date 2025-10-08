import { FaLinkedinIn } from 'react-icons/fa6';
import FormLogo from '../../../src/assets/logo.png';
import Starpng from '../../assets/button-star.png';

export default function ContactForm() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container">
          <div className="form-content flex flex-col md:flex-row gap-10">
            <div className="left-content md:5/12 lg:w-4/12 bg-white/5 rounded-3xl">
              <div className="card py-20 space-y-12 text-center">
                <img src={FormLogo} alt="logo" className="logo w-fit mx-auto" />
                <h2 className="text-4xl md:text-6xl">Still Have A Questions?</h2>
                <ul className="social-icons w-fit mx-auto flex gap-5 mt-5">
                  <li className="icon border p-3 rounded-full">
                    <FaLinkedinIn />
                  </li>
                  <li className="icon border p-3 rounded-full">
                    <FaLinkedinIn />
                  </li>
                  <li className="icon border p-3 rounded-full">
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-content md:7/12 lg:w-8/12">
              <form className="form-content grid grid-cols-2 gap-x-5 gap-y-3.5">
                <div className="input-item col-span-2 sm:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-1">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="input-item col-span-2 sm:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-1">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="input-item col-span-2 sm:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-1">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="input-item col-span-2 sm:col-span-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-1">
                    <input id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="input-item  col-span-2  flex flex-col gap-3">
                  <label htmlFor="name" className="text-md sm:text-lg md:text-lg">
                    Name
                  </label>
                  <div className="input-field rounded-md bg-gradient-to-r from-purple-900 to-gray-400 p-1 pb-0">
                    <textarea rows={5} id="name" className="w-full px-3 py-2.5 rounded bg-dark-bg outline-none" type="text" placeholder="Name" />
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
