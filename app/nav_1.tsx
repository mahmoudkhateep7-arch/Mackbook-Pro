import Image from "next/image";
import logo_image from '../public/logo.svg'

export default function Nav_1_C() {
  return (
    <a className={`hover:-translate-y-1 duration-300 transition-all`} href={'#home'}>
      <Image className={`w-6 h-6`} alt={'logo mackbook pro'} src={logo_image} width={25} height={25} />

    </a>
  )
}