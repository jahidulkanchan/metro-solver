import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white relative">
        <div className="bg-circle-shape absolute w-[500px] mx-auto top-1/2 left-1/2 -translate-x-1/2 blur-3xl -translate-y-1/2 h-[500px] z-[0] bg-main/30 rounded-full"></div>
        <div className="container pt-30 z-[10]">
          <div className="email-subscribtion-content">
            <div className="w-full min-h-[300px] py-14 px-5 bg-white/5 rounded-[60px]">
              <div className="footer-logo w-fit mx-auto">
                <img src="/src/assets/Footer-logo.png" alt="footer-logo" />
              </div>
              <div className="email-form flex mt-10 justify-between px-10 items-center">
                <div className="left-content">
                  <h3 className="text-[40px]">Subscribe to Our Newsletter</h3>
                  <p className="para-text">Join the 25000+ client, in our company</p>
                </div>
                <div className="right-content">
                  <div className="email-content bg-white lg:min-w-[500px] text-black py-2 pl-5 pr-3 rounded-full flex-between">
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                    <button className="flex btn-gradient text-white py-4 px-5 rounded-full justify-center items-center gap-2">
                      <span>
                        <img className="w-[24px]" src="/src/assets/button-star.png" alt="button-star" />
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
        <div className="h-0.5 w-full bg-gradient-to-r from-[#361A67] via-[#1B1B31] to-[#412178]"></div>
        <div className="copy-right container py-8 flex-between">
          <div className="left-content text-sm">@Metro Solver. All Rights Reserved 2024</div>
          <div className="right-content text-sm">@Metro Solver. All Rights Reserved 2024</div>
        </div>
      </footer>
    </>
  );
}
