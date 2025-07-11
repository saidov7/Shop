import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobal } from "../context/GlobalContext";

export default function Navbar() {
  const { cart, user, logout } = useGlobal();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart">
          <FaShoppingCart /> ({cart.length})
        </Link>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}
