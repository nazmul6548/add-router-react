import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <h2>navbar</h2>

<nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
</nav>
    </div>
  )
}

export default Header