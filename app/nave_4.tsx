import { navLinks } from "./data"
import Nav_link_C from "./nav_link"

export default function Nav_4_C() {
  return (
    <div className={`gap-2 sm:hidden flex text-sm justify-center pt-3 flex-wrap`}>
      {navLinks.map(({ label, bg, borders, textColor }, idx) => {

        return (
          <Nav_link_C idx={idx} textColor={textColor} bg={bg} borders={borders} key={label} label={label}></Nav_link_C>
        )
      })}
    </div>
  )
}