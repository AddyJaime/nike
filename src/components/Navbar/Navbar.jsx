import "./Navbar.css";
import logo from "../../assets/images/header-logo.svg";

const Navbar = () => {
  return (
    // Navleft "Logo "
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>
      {/* Nav center items   */}
      <div className="nav-link">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Products</a>
        <a href="">Contact Us</a>
      </div>
      {/* Nav right "sign in and explore now" */}
      <div className="nav-right">
        <span>Sign in / </span>
        <span>Explore now</span>
      </div>
    </nav>
  );
};

export default Navbar;
