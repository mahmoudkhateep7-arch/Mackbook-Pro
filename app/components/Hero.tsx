import Image from "next/image";
import apple_title from '../../public/title.png'
import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Hero_C() {


  const video_ref = useRef<HTMLVideoElement>(null)
  useGSAP(() => {
    const video_element = video_ref.current
    const loadedmetadata_function = () => {
      if (video_element) {
        const duration = video_element.duration;
        const tl = gsap.timeline({ yoyo: true, repeat: -1 })
        tl.fromTo('#video_container_id #video', {
          currentTime: video_element.currentTime
        }, { currentTime: video_element.duration, duration: duration < 20 ? 1 : 3 })
      }
    }
    if (video_element) {
      video_element.pause()
      video_element.currentTime = 1
      if (video_element.readyState >= 1) {
        loadedmetadata_function()

      } else {
        video_element.addEventListener('loadedmetadata', loadedmetadata_function)
      }
    }


    return () => { video_ref.current?.removeEventListener('loadedmetadata', loadedmetadata_function) }
  }, [])

  return (
    <section id={`video_container_id`}
      className={`
      
       pt-30 sm:pt-30 md:pt-25 lg:pt-20   
       text-white bg-black `}>
      <div
        className={`max-w-7xl mx-auto pb-40 sm:pb-25 md:pb-20 lg:pb-15 px-3`}>
        <h3 className={`text-3xl text-center pt-20 sm:pt-5 pb-4  font-semibold`}>MacBook Pro</h3>
        <div className={`flex justify-center pt-4`}>
          <Image className={`w-80  sm:w-100 md:w-110 lg:w-120`} unoptimized={true} priority={true} alt={'apple titlw'} src={apple_title} width={500} height={300} />

        </div>
        <div className={`pb-3  lg:h-60 md:h-50 sm:h-40 `}>
          <video id={'video'} className={`w-full h-full`} playsInline={true} preload={'auto'} ref={video_ref} muted={true} src={'/videos/hero.mp4'}></video>

        </div>
        <div className={`flex justify-center  flex-col items-center gap-6`}>
          <span className={`bg-reddd px-6 py-2 cursor-pointer text-xl rounded-full`}>Buy</span>
          <span className={`text-gray-400 sm:text-[18px] text-sm pb-2 text-center font-semibold`}>From $1599 or $133/mo for 12 months</span>
        </div>



      </div>

    </section>
  )
}