"use client";

import Image from "next/image";
import { performanceImages, performanceImgPositions } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function PerformanceImages_C() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger:
      {
        trigger: '#images_parent',
        start: 'top bottom',
        end: '200px',
        scrub: true
      }
    })

    performanceImgPositions.map(({ bottom, id, left }) => {
      const selector = `.${id}`;
      tl.to(selector, { left, bottom }, 0)
    })
    gsap.fromTo('#padding_id', { opacity: 0, y: 100 }, {
      y: 0, opacity: 1, scrollTrigger: {
        trigger: '#padding_id',
        start: "top bottom",
        end: '150px',
        scrub: true,
      }
    })
    gsap.fromTo('#title_id', { opacity: 0, y: 100 }, {
      y: 0, opacity: 1, scrollTrigger: {
        trigger: '#title_id',
        start: "center bottom",
        end: '150px',
        scrub: true,
      }
    })

  }, [])
  return (
    <div style={{ scrollMarginTop: '100px' }} id={`Watch`} className={`text-white hidden sm:block sm:px-10 px-4`}>
      <div className={`max-w-7xl overflow-hidden   mx-auto py-10 `}>
        <h3 id={`title_id`} className={`lg:text-6xl backdrop-blur-2xl relative z-12 md:text-4xl text-2xl px-10 sm:px-5 md:px-2 lg:px-0 lg:w-2/3 mx-auto  font-semibold text-center`}>Next-level graphics performance. Game on.
        </h3>
        <div className={`h-40`}></div>
        <div id={`images_parent`} className={`relative  sm:h-100 sm:w-100 h-80 w-80 mx-auto  `}>
          {performanceImages.map(({ id, src, tl_style }) => {
            return (
              <div key={id}
                className={`sm:h-100 w-80 h-80  ${id}  sm:w-100 absolute`}>

                <Image width={300} height={300} className={`h-full border-2  w-full object-cover  `} alt={id} src={src} />
              </div>
            )
          })}
        </div>
        <div className={`h-100 `}></div>
        <p id={`padding_id`} className={`to-gray-400 text-center  w-80 sm:w-100 pt-10 md:w-120 text-[18px] mx-auto `}>
          Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so
          <span className={`text-white brightness-125 font-bold px-1 `} >
            gaming feels more immersive and realistic than eve
          </span>
          And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.


        </p>

      </div>

    </div>
  )
}