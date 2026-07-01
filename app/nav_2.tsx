import { navLinks } from "./data"
import Nav_link_C from "./nav_link"

export default function Nav_2_C() {
  return (
    <div className={`sm:gap-5 flex text-sm sm:text-[18px] gap-2 `}>
      {navLinks.map(({ label, bg, borders, textColor }, idx) => {
        return (
          <Nav_link_C idx={idx} textColor={textColor} bg={bg} borders={borders} key={label} label={label}></Nav_link_C>
        )
      })}
    </div>
  )
}