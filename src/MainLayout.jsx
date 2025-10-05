import React from 'react'
import HeroSection from './components/home-page/HeroSection'
import ServiceSection from './components/home-page/ServiceSection'
import VideoSection from './components/home-page/VideoSection'
import CounterSection from './components/home-page/CounterSection'
import TestimonialSection from './components/home-page/TestimonialSection'
import MapSection from './components/home-page/MapSection'
import WhyChoose from './components/home-page/WhyChoose'

export default function MainLayout() {
  return (
    <>
      <HeroSection/>
      <WhyChoose/>
      <MapSection/>
      <TestimonialSection/>
      <CounterSection/>
      <VideoSection/>
      <ServiceSection/>
    </>
  )
}
