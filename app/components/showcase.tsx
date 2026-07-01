"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import mask_img from '../../public/mask-logo.svg'
gsap.registerPlugin(ScrollTrigger)
export default function Showcase() {
  const video_ref = useRef<HTMLVideoElement>(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#game_video_mask_container',
        start: 'top top',
        end: '400px',
        scrub: true,
        pin: true
      }
    })
    tl.to('#game_video_mask_container #scale', { duration: 5, scale: 1 })
    tl.to('#game_video_mask_container #scale', { duration: 5, opacity: 1, })


    gsap.fromTo('#grid_1', { opacity: 0 },
      {
        scrollTrigger: { trigger: '#grid_1', start: 'center bottom', end: '200px', scrub: true },
        opacity: 1
      })
    gsap.fromTo('#grid_2',
      { opacity: 0 }, {
      scrollTrigger:
      {
        trigger: '#grid_2', start: 'center bottom',
        end: '500px', scrub: true
      }, opacity: 1
    })


  }, [])
  return (
    <div id={`game_video_mask_container`} className={`  px-10 sm:px-4 md:px-2   `}>
      <div id={`Watch`} className={`relative pt-30  sm:pt-20  overflow-hidden`}>
        <video preload={'auto'} muted={true}
          autoPlay={true} loop={true} playsInline={true}
          ref={video_ref} className={`flex w-full`} src={'/videos/game.mp4'}>

        </video>

        <div id={`scale`} style={{ scale: 50 }} className={`absolute h-full w-full inset-0`}>
          <Image className={`h-full  w-full object-cover`} src={mask_img} alt={'mask'} fill={true} />

        </div>




      </div>

      <div className={`  mx-auto relative lg:-translate-y-40  max-w-4xl `}>
        <div className={`grid  md:grid-cols-2 lg:grid-cols-3 lg:px-10 px-3 py-10 gap-10`}>
          <div id={`grid_1`} className={`flex flex-col gap-3 col-span-1 lg:col-span-2`}>
            <h3 className={`lg:text-7xl md:text-4xl sm:text-3xl text-xl font-semibold`}>Rocket Chip</h3>
            <p className={`text-gray-400`}>Introducing <span className={`font-semibold text-white  md:text-xl`}>
              M4, the next generation of Apple silicon.
            </span>  M4 powers</p>
            <p className={`text-sm text-gray-400`}>It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.</p>
            <p className={`text-sm text-gray-400`}>A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.</p>
            <span className={`md:text-[18px] font-semibold text-blue-400`}>  Learn more about Apple Intelligence</span>

          </div>
          <div id={`grid_2`} className={`flex flex-col col-span-1  gap-10`}>
            <div className={`flex flex-col gap-2`}>
              <span className={`text-gray-400`}>Up to</span>
              <h4 className={`md:text-5xl text-2xl font-semibold`}>4x faster</h4>
              <p>pro rendering performance than M2</p>

            </div>
            <div className={`flex flex-col gap-2`}>
              <span className={`text-gray-400`}>Up to</span>
              <h4 className={`md:text-5xl text-2xl font-semibold`}>1.5x faster</h4>
              <p>CPU performance than M2</p>

            </div>

          </div>
        </div>

      </div>
    </div >
  )
}