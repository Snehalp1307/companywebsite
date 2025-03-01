import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Snehal Infotech</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Our Products</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/investors">Investors</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
