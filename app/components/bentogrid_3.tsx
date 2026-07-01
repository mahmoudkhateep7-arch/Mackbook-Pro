import Image from "next/image";
import ai_image from '../../public/ai.png'

export default function Bento_grid_3() {
  return (
    <div className={` relative row-span-1   bg-[#1D1D1F] rounded-2xl `}>
      <div id={`colored_border`} className={`absolute  h-full top-0 w-full inset-0  rounded-2xl`}></div>
      <div className={`w-full  h-full p-1`}>
        <div className={'relative z-10 flex h-full w-full rounded-2xl items-center  gap-5 bg-[#1D1D1F]  p-8'}>
          <Image alt={'ai '} width={100} height={100} className={`w-25 h-25 object-cover`} src={ai_image} />
          <div className={`text-xl sm:text-2xl flex flex-col gap-1`}>
            <span>Built for</span>
            <span>Apple Intelligence.</span>
          </div>
        </div>
      </div>
    </div>
  )
}