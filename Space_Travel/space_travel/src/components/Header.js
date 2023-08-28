import { Link, useLinkClickHandler } from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"
import { CgMenuLeft } from "react-icons/cg"

export default function Header() {

  const handleClick =()=> {
    const navbar = document.querySelector(".navbar")
    const listItems = document.querySelectorAll(".list-item")

    navbar.classList.toggle("open")
    // If the toggle is set to the class of "open" in the nav-bar, when each 
    // of the list items is clicked,  the classList disappears.

    listItems.forEach((item) => 
    item.addEventListener("click", () => navbar.classList.remove("open"))
    )
  }
  return (
  <>
    <header className="header flex items-center justify-between w-full lg: flex-row">
      <div>
        <Link to="/">
          <img src={logo} alt="Space Logo" 
          title="Space Tourism Logo" />
        </Link>
      </div>
      {/* Navigation bar inside the header */}
      <nav className="navbar">
        <ul>
          <li className="list-item">
            <Link to="/" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">00</span>Home</Link>
          </li>
          <li className="list-item">
            <Link to="/destination" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">01</span>{" "}Destination{" "}</Link>
          </li>
          <li className="list-item">
            <Link to="/crew" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">02</span>Crew</Link>
          </li>
          <li className="list-item">
            <Link to="/technology" className="lg:text-white"><span className="lg:text-4xl lg:font-bold mr-2">03</span>Technology</Link>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button onClick={handleClick}>
          <CgMenuLeft className="text-white text-4xl"/>
        </button>
      </div>
    </header>
  </>
  )
}
