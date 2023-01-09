import "./sidedrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = ({ show }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer_links">
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              cart
              <span className="sidedrawer_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideDrawer;
