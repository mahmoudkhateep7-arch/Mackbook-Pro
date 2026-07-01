"use client"
import { useState } from 'react'
import Navbar_C from './components/Navbar_C'
import './style.css'
import Hero_C from './components/Hero'
import Models_display_C from './mdoels_Display_C'
import Showcase from './components/showcase'
import PerformanceImages_C from './components/performanceImages'
import Turning_pc_C from './components/turning_pc_video'
import BentoGrid from './components/BentoGrid'
import Footer from './components/footer'
export default function Page_App() {



  return (
    <div style={{}} className={`bg-black text-white  relative `} id={`home`}>
      <Navbar_C ></Navbar_C>

      <Hero_C></Hero_C>
      <Models_display_C ></Models_display_C>
      <Showcase></Showcase>



      <PerformanceImages_C></PerformanceImages_C>


      <Turning_pc_C></Turning_pc_C>



      <BentoGrid></BentoGrid>
      <div className={`h-30`}></div>
      <Footer></Footer>

    </div>
  )
}