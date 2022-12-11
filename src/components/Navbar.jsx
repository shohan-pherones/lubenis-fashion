import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center uppercase">
      <div className="left">
        <span className="logo">Lubenis.</span>
      </div>
      <div className="mid flex gap-5">
        <Link to="/" className="link-item">
          Home
        </Link>
        <Link to="/products" className="link-item">
          Products
        </Link>
        <Link to="/orders" className="link-item">
          Orders
        </Link>
        <Link to="/about" className="link-item">
          About
        </Link>
        <Link to="/contact" className="link-item">
          Contact
        </Link>
      </div>
      <div className="right flex gap-5">
        <Link to="/cart" className="link-item">
          Cart{" "}
          <span className="cart-count absolute -top-5 left-0 h-5 w-5 bg-gray-700 text-gray-50 flex justify-center items-center">
            0
          </span>
        </Link>
        <Link to="/sign-up" className="link-item">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
