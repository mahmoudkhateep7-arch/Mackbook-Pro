import Navbar_C from './components/Navbar_C'
import './style.css'

export default function Page_App() {


  return (
    <div className={`bg-green-600 `} id={`home`}>
      <Navbar_C></Navbar_C>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum aspernatur aperiam quis ab expedita quia similique rerum, perferendis delectus ratione. Mollitia magni esse alias quidem architecto exercitationem explicabo nostrum omnis.</p>

      {/* scroll purposes */}
      <div className={`h-screen`}></div>
      <div className={`h-screen`}></div>

      <div className={`h-screen`}></div>
      <div className={`h-screen`}></div>

    </div>
  )
}