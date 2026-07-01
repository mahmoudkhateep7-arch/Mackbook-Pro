"use client";
import Nav_1_C from "../nav_1";
import Nav_2_C from "../nav_2";
import Nav_3_C from "../nav_3";
import Nav_4_C from "../nave_4";
import Nav_5_c from "../nav_5";
import { SetStateAction, useEffect, useRef } from "react";
export default function Navbar_C() {

  return (
    <div className={` text-white  z-3000  bg-black  flex flex-col gap-5   fixed top-0 w-full  `}>

      <div className={`px-2 `}>
        <div className={`max-w-7xl pt-3 relative z-10  mx-auto  `}>
          <div className={`flex justify-between items-center  `}>
            <Nav_1_C></Nav_1_C>

            <Nav_2_C></Nav_2_C>

            <Nav_3_C></Nav_3_C>

          </div>
          {/* <Nav_4_C></Nav_4_C> */}
        </div>

      </div>

      <Nav_5_c></Nav_5_c>
    </div >
  )
}