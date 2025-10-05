import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

export default function ServiceCard({icon,title,paratext,urlLink}) {
  return (
    <>
      <div className="service-card py-10 space-y-2 px-8 bg-card rounded-3xl">
        <div className="icon mb-2">
          <img src={icon} alt="icon" />
        </div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="paratext">{paratext}</p>
        <a className="text-md flex items-center gap-2 text-blue-700" href={urlLink}>
          Readmore <MdArrowOutward />
        </a>
      </div>
    </>
  );
}
