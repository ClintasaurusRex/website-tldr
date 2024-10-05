import "./NavBar.scss";

return (
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
  </nav>
);

export default NavBar;
