"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { navLinks } from "./data";

export default function Nav_link_C({ idx, textColor, label, bg, borders }: {
  idx: number,
  bg: string,
  borders: {
    top: string,
    right: string,
    bottom: string,
    left: string
  },
  label: string,
  textColor: string

}) {
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  useGSAP(() => {
    tlRef.current = gsap.timeline({ paused: true })
      .to(`#bg_color_id_${label}`, {
        height: '100%', background: bg,
        borderLeft: borders.left,
        borderRight: borders.right,
        borderTop: borders.top,
        borderBottom: borders.bottom,
        color: textColor


      })

  }, [])
  const onHover = () => {
    if (tlRef.current) {
      tlRef.current.play()
    }

  }
  const onLeave = () => {
    if (tlRef.current) {
      console.log(44444444)
      tlRef.current.reverse()
    }
  }
  return (
    <a onMouseLeave={onLeave} onMouseEnter={onHover} className={`relative ${idx == navLinks.length - 1 ? 'max-[400px]:hidden' : ''}`} href={`#${label}`}>
      <span className={`relative z-3 px-2`}>{label}</span>
      <span id={`bg_color_id_${label}`} className={`absolute bg-[#333]   h-0 bottom-0 left-0 w-full right-0`}></span>
    </a>
  )
}