import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/home">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/home">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/home">Pricing</Link>
          </li>
        </ul>
        <div className="login-signup">
          <Link to="/home">Login</Link>
          <Link to="/home">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
