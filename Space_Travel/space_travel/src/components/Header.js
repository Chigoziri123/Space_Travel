import { Link } from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"

export default function Header() {
  return (
    <>
<header className="header absolute top-0 left-0">
    <div>
        <Link to="/">
          <img src={ logo } alt='Space Logo' title='Space Tourism Logo' />
        </Link>
    </div>
</header>
    </>
  )
}
