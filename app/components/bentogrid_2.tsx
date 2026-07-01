import Image from "next/image";
import sun_image from '../../public/sun.png'

export default function Bento_grid_2() {
  return (
    <div className={`p-10 row-span-1  bg-[#1D1D1F] rounded-2xl items-center flex  gap-5`}>
      <Image alt={'laptop '} width={100} height={100} className={`w-25 h-25 object-cover`} src={sun_image} />
      <div className={`text-xl sm:text-3xl flex flex-col gap-1`}>
        <span>A stunning</span>
        <span>Liquid Retina XDR</span>
        <span>display.</span>
      </div>
    </div>
  )
}