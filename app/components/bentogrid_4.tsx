import Image from "next/image";
import battary_image from '../../public/battery.png'

export default function BentorGrid_4() {
  return (
    <div className={`sm:row-span-2  bg-[#1D1D1F] rounded-2xl`}>
      <div className={`  h-full p-10 flex flex-col justify-end z-3 `}>

        <Image alt={'sun '} width={100} height={100} className={`h-25 w-25 object-cover`} src={battary_image} />
        <div className={`flex flex-col gap-1 text-xl md:text-3xl`}>
          <div className={`md:text-3xl text-xl font-semibold`}><span>Up to</span> <span className={`text-green-500`}>14 more hours</span></div>
          <div className={`md:text-3xl text-xl font-semibold`}><span>battery life. </span> <span className={`text-gray-500`}>{'( '}Up to 24</span></div>
          <span className={`text-gray-500 text-xl md:text-3xl`}>hours total.{' )'}</span>


        </div>

      </div>
    </div>
  )
}