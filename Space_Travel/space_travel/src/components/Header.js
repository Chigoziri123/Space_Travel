import { Link } from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"

export default function Header() {
  return (
  <>
    <header className="header absolute top-0 left-0">
      <div>
        <Link to="/">
          <img src={logo} alt="Space Logo" 
          title="Space Tourism Logo" />
        </Link>
      </div>
{/* Navigation bar inside the header */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"><span>00</span>Home</Link>
          </li>
          <li>
            <Link to="/destination"><span>01</span>Destination</Link>
          </li>
          <li>
            <Link to="/crew"><span>02</span>Crew</Link>
          </li>
          <li>
            <Link to="/technology"><span>03</span>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
  )
}
