import Image from "next/image";
import logo_image from '../../public/logo.svg'
import { footerLinks } from "../data";
export default function Footer() {
  return (
    <div className={`px-3 pb-5`}>
      <div className={` max-w-7xl  mx-auto text-gray-400 `}>
        <div className={`flex justify-between gap-10 pt-2 items-center pb-5 border-b border-gray-400`}>
          <p className={`text-[10px] sm:text-sm`}>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
          <Image width={25} height={25} className={`w-6 h-6 object-cover`} alt={'logo'} src={logo_image} />
        </div>

        <div className={`flex py-5 flex-col gap-5 md:flex-row justify-between md:items-center`}>
          <p className={`text-[10px] sm:text-sm`}>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
          <div className={`flex gap-4 flex-col md:flex-row text-blue-500 text-sm`}>
            {footerLinks.map(({ label, link }) => {
              return (
                <a href={link} key={label}>
                  {label}
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}