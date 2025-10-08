import locationIco from '../assets/location.png';
import phoneIco from '../assets/phoneIco.png';
import mailIco from '../assets/mail.png';
import starPng from '../assets/button-star.png';
import footerLogo from '../assets/footer-logo.png';

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white relative">
        <div className="bg-circle-shape absolute h-[800px] w-full md:w-[800px] mx-auto top-1/2 left-1/2 -translate-x-1/2 blur-3xl -translate-y-1/2  z-[0] bg-main/30 rounded-full"></div>
        <div className="container pt-30 z-[10] relative">
          <div className="email-subscribtion-content max-w-7xl mx-auto">
            <div className="w-full min-h-[300px] py-14 px-5 bg-white/5 rounded-3xl md:rounded-[40px]">
              <div className="footer-logo w-fit mx-auto">
                <img className='w-[250px] sm:w-fit mx-auto' src={footerLogo} alt="footer-logo" />
              </div>
              <div className="email-form flex flex-col md:flex-row mt-10 justify-between px-10 items-center">
                <div className="left-content">
                  <h3 className="text-3xl font-medium md:text-4xl text-center md:text-left">Subscribe to Our Newsletter</h3>
                  <p className="para-text text-center md:text-left">Join the 25000+ client, in our company</p>
                </div>
                <div className="right-content">
                  <div className="email-content bg-white w-[325px] sm:w-fit mt-5 md:mt-0 lg:min-w-[500px] text-black py-2 pl-5 pr-3 rounded-full flex-between">
                    <input className='w-[150px]' type="email" name="email" id="email" placeholder="Enter your email" />
                    <button className="flex btn-gradient text-white py-2 md:py-4 px-5 rounded-full justify-center items-center gap-2">
                      <span>
                        <img className="w-[18px] md:w-[24px]" src={starPng} alt="button-star" />
                      </span>{' '}
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-menu-content"></div>
        </div>
        <br />
        <div className="relative overflow-hidden pt-8">
          <div className="bg-main/50 absolute -top-5 -right-5 -z-[1] h-[120px] w-[120px] blur-3xl"></div>

          <div className="bg-main/50 absolute -bottom-5 -left-5 -z-[1] h-[120px] w-[120px] blur-3xl"></div>
          <div className="relative container">
            <div className="flex flex-col mb-10 justify-between md:flex-row md:gap-8 lg:gap-0">
              <div className="max-w-[350px]">
                <h1 className="font-medium text-4xl max-w-[250px]">Got Questions? Call us !</h1>
                <div className="item flex items-center mt-5 gap-3">
                  <div className="icon">
                    <img className="min-w-[30px]" src={locationIco} alt="" />
                  </div>
                  <p className="paratext">Head office: Metro Solver Limited Grantham Road, London E12 5LX, United Kingdom</p>
                </div>
                <div className="item flex items-center mt-5 gap-3">
                  <div className="icon">
                    <img className="min-w-[30px]" src={phoneIco} alt="" />
                  </div>
                  <p className="paratext">+447936 455446</p>
                </div>
                <div className="item flex items-center mt-5 gap-3">
                  <div className="icon">
                    <img className="min-w-[30px]" src={mailIco} alt="" />
                  </div>
                  <p className="paratext">official@metrosolver.com</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 md:mt-0 md:flex-row md:justify-between md:gap-8 lg:gap-24">
                {/* Menu Links */}
                <div>
                  <p className="text-lg font-semibold">Company</p>
                  <ul className="text-light-gray mt-2 flex flex-col gap-2 text-sm">
                    <li className="group relative w-fit">
                      <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      <a href="/" className="nav-link relative font-medium duration-150 hover:text-white">
                        Home
                      </a>
                    </li>
                    <li className="group relative w-fit">
                      <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      <a href="/" className="nav-link relative font-medium hover:text-white">
                        About us
                      </a>
                    </li>
                    <li className="group relative w-fit">
                      <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      <a href="/" className="nav-link relative font-medium hover:text-white">
                        Our Team
                      </a>
                    </li>
                    <li className="group relative w-fit">
                      <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      <a href="/" className="nav-link relative font-medium hover:text-white">
                        User Profile
                      </a>
                    </li>
                    <li className="group relative w-fit">
                      <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      <a href="/" className="nav-link relative font-medium hover:text-white">
                        White Labelling
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Follow Us */}
                <div>
                  <p className="font-semibold mt-0.5 sm:mt-0">About Us</p>
                  <ul className="text-light-gray mt-2 space-y-2 text-sm">
                    <li>
                      <a href="" className="hover:text-white">
                        Our Stories
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Send Message
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Follow Us */}
                <div>
                  <p className="font-semibold mt-0.5 sm:mt-0">Support</p>
                  <ul className="text-light-gray mt-2 space-y-2 text-sm">
                    <li>
                      <a href="" className="hover:text-white">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Start Earning
                      </a>
                    </li>
                  </ul>
                </div>

                {/* services */}
                <div>
                  <p className="font-semibold mt-0.5 sm:mt-0">Services</p>
                  <ul className="text-light-gray mt-2 space-y-2 text-sm">
                    <li>
                      <a href="" className="hover:text-white">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Creative Writing Solution
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Web & Software Development
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        E-Commerce Solution
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Multimedia & Video Editing
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Merchandise
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Premium Website
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Premium Domains
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-white">
                        Special Combo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] sm:h-0.5 w-full bg-gradient-to-r from-[#361A67] via-[#1B1B31] to-[#412178]"></div>
        <div className="copy-right text-center md:text-left container py-8 md:flex justify-between items-center">
          <div className="left-content text-sm">@Metro Solver. All Rights Reserved 2024</div>
          <div className="right-content text-sm">Metro Solver Ltd incorporated in England & Wales Registration No:15792819</div>
        </div>
      </footer>
    </>
  );
}
