import { navLinks } from "./data"
import Nav_link_C from "./nav_link"

export default function Nav_2_C() {
  return (
    <div className={`gap-5 sm:flex hidden`}>
      {navLinks.map(({ label, bg, borders, textColor }, idx) => {
        return (
          <Nav_link_C idx={idx} textColor={textColor} bg={bg} borders={borders} key={label} label={label}></Nav_link_C>
        )
      })}
    </div>
  )
}