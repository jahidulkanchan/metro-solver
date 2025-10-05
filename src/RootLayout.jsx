import React from 'react'
import Navbar from './components/Navbar'
import MainLayout from './MainLayout'
import Footer from './components/Footer'

export default function RootLayout() {
  return (
    <>
      <Navbar/>
      <MainLayout/>
      <Footer/>
    </>
  )
}
