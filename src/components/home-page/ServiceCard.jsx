import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

export default function ServiceCard({icon,title,paratext,urlLink}) {
  return (
    <>
      <div className="service-card group z-[1] overflow-hidden cursor-pointer py-10 relative space-y-2 px-8 bg-white/5 rounded-3xl">
        <div className="absolute duration-300 ease rotate-[23deg] -z-[1] left-[-50px] top-[-50px] bg-blue-bg/30 opacity-0 group-hover:opacity-80 blur-2xl w-[100px] h-full"></div>
        <div className="absolute duration-300 ease rotate-[23deg] -z-[1] right-[-50px] bottom-[-50px] bg-blue-bg/50 opacity-0 group-hover:opacity-80 blur-3xl w-[100px] h-full"></div>
        <div className="z-[9]">
          <div className="icon mb-2">
            <img src={icon} alt="icon" />
          </div>
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="paratext">{paratext}</p>
          <a className="text-md flex items-center gap-2 text-blue-700" href={urlLink}>
            Readmore <MdArrowOutward />
          </a>
        </div>
      </div>
    </>
  );
}
