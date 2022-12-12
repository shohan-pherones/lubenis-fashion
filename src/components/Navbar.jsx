import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const products = useSelector((state) => state.product.products);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

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
        {user && (
          <Link to="/profile" className="link-item">
            Profile
          </Link>
        )}
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
          <span className="cart-count absolute -top-5 left-0 w-5 h-5 bg-gray-700 text-gray-50 flex justify-center items-center">
            {products.length}
          </span>
        </Link>
        {user ? (
          <button className="uppercase link-item" onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to="/sign-in" className="link-item">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
