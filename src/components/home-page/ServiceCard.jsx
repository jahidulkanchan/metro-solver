import React from 'react'

export default function ServiceCard({icon,title,paratext,urlLink}) {
  return (
    <>
      <div className="service-card py-10 px-8 bg-card rounded-3xl">
        <div className="icon"><img src={icon} alt="icon" /></div>
        <h3 className='text-2xl font-medium'>{title}</h3>
        <p className='paratext'>{paratext}</p>
        <a className='text-lg' href={urlLink}>Readmore</a>
      </div>
    </>
  )
}
