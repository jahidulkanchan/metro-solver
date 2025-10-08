import React from 'react'
import HeroSection from './components/home-page/HeroSection'
import ServiceSection from './components/home-page/ServiceSection'
import VideoSection from './components/home-page/VideoSection'
import CounterSection from './components/home-page/CounterSection'
import TestimonialSection from './components/home-page/TestimonialSection'
import MapSection from './components/home-page/MapSection'
import WhyChoose from './components/home-page/WhyChoose'
import ContactForm from './components/home-page/ContactForm'

export default function MainLayout() {
  return (
    <>
      <HeroSection/>
      <ContactForm/>
      <ServiceSection/>
      <WhyChoose/>
      <VideoSection/>
      <CounterSection/>
      <TestimonialSection/>
      <MapSection/>
    </>
  )
}
