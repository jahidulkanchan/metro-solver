import React from 'react'

export default function WorkingProcess() {
  return (
    <>
      <section className="bg-black text-white min-h-[650px]">
        <div className="container flex justify-center items-center">
          <div className="center-circle z-[0] bg-dark-gray relative overflow-hidden w-[300px] h-[300px] rounded-full p-5 flex-center">
            <div className="absolute duration-300 ease rotate-[23deg] z-[5] left-[-50px] top-[-50px] bg-blue-bg/30 opacity-80 blur-2xl w-[100px] h-full"></div>
            <div className="absolute duration-300 ease rotate-[23deg] z-[5] right-[-50px] bottom-[-50px] bg-blue-bg/80 blur-3xl w-[100px] h-full"></div>
            <div className="content relative bg-gradient-to-r from-purple-900 to-gray-400 overflow-hidden rounded-full p-1 h-full flex-center z-[2] text-4xl md:text-5xl font-medium text-center">
              <div className="rounded-full flex-center w-full left-0 top-0 z-[-1] right-0 bg-dark-gray h-full">
                <h2>How to Works?</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
