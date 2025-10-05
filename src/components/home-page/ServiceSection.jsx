import React from 'react'
import ServiceCard from './ServiceCard'
import icon1 from '../../assets/icon1.png'

export default function ServiceSection() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container py-20">
          <div className="heading-text text-center mb-10">
            <h2 className='text-3xl md:text-6xl font-medium'>Our Services</h2>
            <p className='paratext mt-1 md:mt-3 max-w-xl mx-auto'>Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.</p>
          </div>
          <div className="service-cards grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
            <ServiceCard icon={icon1} title="Service Title" paratext="This is a short description of the service offered." urlLink="https://www.google.com/"></ServiceCard>
          </div>
        </div>
      </section>
    </>
  );
}
