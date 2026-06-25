import Image from "next/image";
import search_image_svg from '../public/search.svg'
import cart_image_svg from '../public/cart.svg'


export default function Nav_3_C() {
  return (
    <div className={`flex gap-2 items-center`}>
      <Image className={`w-6 h-6 hover:-translate-y-1 duration-300 transition-all cursor-pointer`} alt={'logo mackbook pro'} src={search_image_svg} width={25} height={25} />
      <Image className={`w-6 h-6 hover:-translate-y-1 duration-300 transition-all cursor-pointer`} alt={'logo mackbook pro'} src={cart_image_svg} width={25} height={25} />
    </div>
  )
}