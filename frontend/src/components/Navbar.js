import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ toggleHandler }) => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>Mern Cart</h2>
      </div>

      <ul className="nav_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              cart
              <span className="cart_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
      {/* */}
      <i
        onClick={toggleHandler}
        class="fa-sharp fa-solid fa-bars hamburger"
      ></i>
    </nav>
  );
};
export default Navbar;
