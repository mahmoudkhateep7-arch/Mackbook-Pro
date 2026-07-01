import Image from "next/image";
import nature_img from '../../public/highlight-bg.png'
import laptop_image from '../../public/laptop.png'
export default function Bento_grid_1() {
  return (
    <div className={`relative rounded-2xl overflow-hidden sm:row-span-2 `}>

      <Image className={`object-cover`} fill={true} alt={'nature'} src={nature_img} />

      <div className={`relative  h-full p-10 flex flex-col justify-end z-3 `}>

        <Image alt={'sun '} width={100} height={100} className={`h-25 w-25 object-cover`} src={laptop_image} />
        <div className={`flex flex-col gap-1 text-xl md:text-3xl`}>
          <span>Fly through</span>
          <span>demanding tasks</span>
          <span>up to 9.8x faster.</span>

        </div>

      </div>
    </div>
  )
}
