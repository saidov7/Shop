import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import "../styles/style.css";

function Navbar() {
  const { logout, cart } = useGlobal();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">MyShop</Link>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">More</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">🛒 Savat ({cart.length})</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
