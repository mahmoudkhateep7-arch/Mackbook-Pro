import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Model_16 from '../public/models/Macbook-16'
import Model_14 from '../public/models/Macbook-14'
import gsap from "gsap";

export default function Models_display_C() {
  const [mac_16_or_14, set_mac] = useState<16 | 14>(16)
  const [mode, set_mode] = useState<'dark' | 'light'>('dark')
  const handle_click_16 = () => {
    if (mac_16_or_14 == 16) { return }

    gsap.fromTo('#box_14', { x: 0, opacity: 1 },
      {
        x: '-100vw', opacity: 0, duration: .6,
        onComplete: () => { set_mac(16) }
      })

  }
  const handle_click_14 = () => {
    if (mac_16_or_14 == 14) { return }

    gsap.fromTo('#box_16', { x: 0, opacity: 1 }, { x: '100vw', opacity: 0, duration: .6, onComplete: () => { set_mac(14) } })


  }
  useEffect(() => {
    if (mac_16_or_14 == 16) {
      gsap.fromTo('#box_16', { opacity: 0, x: '100vw', }, { duration: .6, x: 0, opacity: 1 })

    } else {
      gsap.fromTo('#box_14', { opacity: 0, x: '-100vw', }, { duration: .6, x: 0, opacity: 1 })
    }

  }, [mac_16_or_14])
  return (
    <div id={`Mac`} style={{ scrollMarginTop: '100px' }} className={`overflow-x-hidden text-white bg-[#444] pt-5`}>
      <h3 className={`lg:text-5xl text-2xl md:text-3xl   font-semibold pl-3 sm:pl-10 md:pl-15 pb-10`}>
        Take a closer look.

      </h3>
      {mac_16_or_14 == 16 &&
        <>
          <div id={`box_16`} className={`lg:h-100 h-70 sm:flex hidden opacity-0 top-0 left-0 right-0   justify-center items-center`}>
            <Canvas camera={{ fov: 45 }} className={`h-full  pb-10`}>
              <ambientLight ></ambientLight>
              <directionalLight position={[10, 10, 5]}></directionalLight>

              <Suspense fallback={<>Loading...</>}>
                <Center position={[0, 0, -50]}>
                  <Model_16 mode={mode == 'dark' ? 'red' : 'white'}></Model_16>
                </Center>
              </Suspense>
            </Canvas>
          </div>

          <div id={`box_16`} className={`lg:h-100 h-70 sm:hidden opacity-0 top-0 left-0 right-0  flex justify-center items-center`}>
            <Canvas camera={{ fov: 55, }} className={`h-full  pb-10`}>
              <ambientLight ></ambientLight>
              <directionalLight position={[10, 10, 5]}></directionalLight>

              <Suspense fallback={<>Loading...</>}>
                <Center position={[0, 0, -50]}>
                  <Model_16 mode={mode == 'dark' ? 'red' : 'white'}></Model_16>
                </Center>
              </Suspense>
            </Canvas>
          </div>
        </>
      }

      {mac_16_or_14 == 14 &&
        <>
          <div id={`box_14`} className={`lg:h-100 h-70 hidden  opacity-0  sm:flex justify-center items-center`}>
            <Canvas camera={{ fov: 55 }} className={`h-full  pb-10`}>
              <ambientLight></ambientLight>
              <directionalLight position={[10, 10, 5]}></directionalLight>

              <Suspense fallback={<>Loading...</>}>
                <Center position={[0, 0, -50]}>
                  <Model_14 mode={mode == 'dark' ? 'red' : 'white'}></Model_14>
                </Center>
              </Suspense>
            </Canvas>
          </div>
          <div id={`box_14`} className={`lg:h-100 h-70 flex  opacity-0  sm:hidden justify-center items-center`}>
            <Canvas camera={{ fov: 65 }} className={`h-full  pb-10`}>
              <ambientLight></ambientLight>
              <directionalLight position={[10, 10, 5]}></directionalLight>

              <Suspense fallback={<>Loading...</>}>
                <Center position={[0, 0, -50]}>
                  <Model_14 mode={mode == 'dark' ? 'red' : 'white'}></Model_14>
                </Center>
              </Suspense>
            </Canvas>
          </div>

        </>}

      <div className={`flex py-5  justify-center items-center gap-10`}>
        <div className={`flex gap-2`}>
          <span onClick={() => { set_mode('light') }} className={`w-8  border-4 ${mode == 'light' ? ' border-black' : 'border-transparent'} cursor-pointer h-8 bg-white rounded-full`}></span>
          <span onClick={() => { set_mode('dark') }} className={`w-8  border-4 ${mode == 'dark' ? ' border-white' : 'border-transparent'} cursor-pointer h-8 bg-red-500 rounded-full`}></span>
        </div>
        <div className={`gap-2 flex`}>
          <span onClick={handle_click_14} className={`w-8 h-8 cursor-pointer border-4 ${mac_16_or_14 == 14 ? ' border-white' : 'border-transparent'}  bg-black flex justify-center items-center rounded-full`}>14</span>
          <span onClick={handle_click_16} className={`w-8 h-8 cursor-pointer border-4 ${mac_16_or_14 == 16 ? ' border-white' : 'border-transparent'}  bg-black flex justify-center items-center rounded-full`}>16</span>
        </div>
      </div>
    </div>
  )
}