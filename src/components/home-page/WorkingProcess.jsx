import work1 from '../../assets/work-01.png';

export default function WorkingProcess() {
  return (
    <>
      <section className="bg-black flex-center text-white min-h-[500px]">
        <div className="container flex relative justify-center py-10 items-center">
          <div className="relative w-fit">
            {/* Main circle */}
            <div className="center-circle z-[0] bg-dark-gray relative overflow-hidden w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] rounded-full p-5 flex-center">
              {/* bg-gradient */}
              <div className="absolute duration-300 ease rotate-[23deg] z-[5] left-[-50px] top-[-50px] bg-blue-bg/30 opacity-80 blur-2xl w-[100px] h-full"></div>
              <div className="absolute duration-300 ease rotate-[23deg] z-[5] right-[-50px] bottom-[-50px] bg-blue-bg/80 blur-3xl w-[100px] h-full"></div>
              {/* Content */}
              <div className="content relative w-full bg-gradient-to-r from-purple-900 to-gray-400 overflow-hidden rounded-full p-1 h-full flex-center z-[2] text-4xl md:text-5xl font-medium text-center">
                <div className="rounded-full flex-center w-full left-0 top-0 z-[-1] right-0 bg-dark-gray h-full">
                  <h2 className="p-3 sm:p-0">How to Works?</h2>
                </div>
              </div>
            </div>
            {/* work process items */}
            {/* left items */}
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -left-[30px] md:-left-[240px] lg:-left-[250px] top-0 px-3 md:px-5 py-3 flex-between gap-3">
              <span className="hidden md:inline-block">Delivery and Support</span>
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
            </div>
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -left-[50px] md:-left-[250px] lg:-left-[280px] top-1/2 -translate-y-1/2 px-3 md:px-5 py-3 flex-between gap-3">
              <span className="hidden md:inline-block">Quality Assurance</span>
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
            </div>
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -left-[30px] md:-left-[240px] lg:-left-[250px] bottom-0 px-3 md:px-5 py-3 flex-between gap-3">
              <span className="hidden md:inline-block">Implement & Develop</span>
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
            </div>
            {/* right items */}
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -right-[30px] md:-right-[240px] lg:-right-[250px] top-0 px-3 md:px-5 py-3 flex items-center gap-3">
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
              <span className="hidden md:inline-block">Book a Call</span>
            </div>
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -right-[50px] md:-right-[250px] lg:-right-[280px] top-1/2 -translate-y-1/2 px-3 md:px-5 py-3 flex items-center gap-3">
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
              <span className="hidden md:inline-block">Requirement Analysis</span>
            </div>
            <div className="absolute bg-dark-gray md:min-w-[250px] rounded-full -right-[30px] md:-right-[240px] lg:-right-[250px] bottom-0 px-3 md:px-5 py-3 flex items-center gap-3">
              <div className="icon p-3 bg-gradient-to-r  from-blue-bg/40 via-dark-bg via-40% to-blue-bg/80 rounded-full">
                <img className="w-[24px]" src={work1} alt="" />
              </div>
              <span className="hidden md:inline-block">Service Customisation</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
