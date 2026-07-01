import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function Nav_5_c() {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,


        start: 'top top',
        end: "bottom bottom",
        scrub: true,
        refreshPriority: -1,
        invalidateOnRefresh: true,

      }
    })
      .to('#progress_bar_id', { scaleX: 1 })
      .to('#ball', { x: '100vw' }, '<')





  }, [])
  return (
    <div className={`relative      h-2 bg-amber-50 `}>
      <div id={`progress_bar_id`} className={`absolute h-2 left-0 bg-amber-300 top-0 w-full origin-left scale-x-0`}></div>

      <div id={`ball`} className={`bg-red-500 absolute -ml-2 top-0 left-0  z-10 w-2 h-2 scale-200 rounded-full`}></div>
    </div>


  )
}