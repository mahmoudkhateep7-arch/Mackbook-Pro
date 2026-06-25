import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function Nav_5_c() {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: "bottom bottom",
        scrub: 2,

      }
    })
      .fromTo('#progress_bar_id', { width: 0 }, { width: '100%', })

  }, [])
  return (
    <div className={`h-2 absolute overflow-x-clip right-0 bottom-0 w-full left-0 bg-[#dbc6c652]`}>
      <div id={`progress_bar_id`} className={`relative flex  justify-end origin-left h-2 w-full bg-green-400`}>
        <span className={`h-2 w-2 bg-red-500 rounded-full scale-250`}></span>
      </div>
    </div>

  )
}