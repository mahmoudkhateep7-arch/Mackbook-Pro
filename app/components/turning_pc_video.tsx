"use client";

import Image from "next/image";
import { features, featureSequence } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Model_Turning from '../mac_transformed'
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function Turning_pc_C() {
  const [modelReady, setModel] = useState(false)
  const model_ref: any = useRef(null)
  const videoReff = useRef<null | HTMLVideoElement>(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#features_containers',
        start: 'top top',
        end: '200%',
        pin: true,
        scrub: true,
        id: 'main_scroll'
      }
    })
    if (modelReady && model_ref.current) {
      tl.to(model_ref.current.rotaion, {
        y: Math.PI * 8,
        ease: 'none',
      }, 0)
    }
    features.forEach(({ id }) => {
      const Next_index = id % featureSequence.length
      const next_src = featureSequence[Next_index].videoPath
      tl.fromTo(`#box_${id}`, { y: 100, opacity: 0 }, { opacity: 1, y: 0 })
      tl.fromTo(`#box_${id}`, { y: 0 }, { duration: 3, y: -400, }, '>>')
      tl.fromTo(`#box_${id}`, { opacity: 1 },
        {
          duration: 1,
          opacity: 0,
          onStart: () => {
            if (videoReff.current) {
              videoReff.current.pause()
              videoReff.current.src = next_src
              videoReff.current.load()
              videoReff.current.play()

            }
          },
          onReverseComplete: () => {
            if (videoReff.current) {
              videoReff.current.pause()
              videoReff.current.src = next_src
              videoReff.current.load()
              videoReff.current.play()

            }
          }
        },



      )


    })




  }, { dependencies: [] })


  return (
    <div id={`Vision`} style={{ scrollMarginTop: '100px' }} className={`py-10  hidden sm:block`}>
      {/* text */}
      <div>
        <h3 className={`text-center pb-10 text-4xl font-semibold capitalize`}>see it all in a new  light.</h3>
        <div id={`features_containers`} className={`relative h-screen  `}>
          <div className={`absolute z-14    inset-0 h-full w-full`}>
            <div className={`relative h-screen z-10`}>
              {features.map(({ highlight, icon, id, styles, text }) => {
                // const 
                return (
                  <div id={`box_${id}`} key={id} className={`absolute w-80 ${styles}`}>
                    <div>
                      <Image className={`h-10 w-10 object-cover`} alt={highlight} src={icon} width={40} height={40} />

                    </div>
                    <div>
                      <span className={`text-3xl pr-1 font-semibold text-white`}>{highlight}</span>
                      <span className={`text-gray-400`}>{text}</span>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={`absolute  w-full h-full opacity-0  overflow-hidden`}>
            <video style={{ opacity: '0', }} ref={videoReff} className={`w-full h-auto`} src={featureSequence[0].videoPath} playsInline={true} muted={true} loop={true} autoPlay={true}></video>

          </div>


          {/* model goes her */}
          <div className={`  z-2 bg-amber-d600 h-full w-full  `}>
            <Canvas camera={{ fov: 70 }}>
              <ambientLight></ambientLight>
              <directionalLight position={[10, 10, 5]}></directionalLight>

              <Center position={[0, 0, -50]} >
                <Model_Turning setModel={setModel} model_ref={model_ref} videoReff={videoReff}></Model_Turning>
              </Center>
            </Canvas>
          </div>

        </div>
      </div>
    </div>
  )
}