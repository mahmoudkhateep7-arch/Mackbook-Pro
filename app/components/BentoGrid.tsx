"use client";

import BentorGrid_4 from "./bentogrid_4";
import Bento_grid_1 from "./bentogrid_1";
import Bento_grid_2 from "./bentogrid_2";
import Bento_grid_3 from "./bentogrid_3";


export default function BentoGrid() {
  return (
    <div id={`Store`} style={{ scrollMarginTop: '100px' }} className={`lg:px-0 md:px-20 sm:px-10 px-4 py-10 bg-black`}>
      <div className={`max-w-7xl mx-auto`}>
        {/*  */}
        <div className={`lg:grid-cols-2 grid-cols-1 grid  gap-5 `}>

          <div className={`grid sm:grid-rows-3 grid-rows-2 gap-5`}>
            <Bento_grid_1></Bento_grid_1>
            <Bento_grid_2></Bento_grid_2>
          </div>

          {/* right divs */}
          <div className={`grid gap-5 sm:grid-rows-3 grid-rows-2`}>
            <Bento_grid_3></Bento_grid_3>
            <BentorGrid_4></BentorGrid_4>
          </div>
        </div>
      </div>
    </div>
  )
}











