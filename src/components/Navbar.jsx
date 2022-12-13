import { signOut } from "firebase/auth";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { useNavLink } from "../hooks/gsap";

const Navbar = () => {
  const products = useSelector((state) => state.product.products);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const navLink1 = useRef(null);
  const navLink2 = useRef(null);
  const navLink3 = useRef(null);
  const navLink4 = useRef(null);
  const navLink5 = useRef(null);
  const navLink6 = useRef(null);
  const navLink7 = useRef(null);
  const navLink8 = useRef(null);
  const navLink9 = useRef(null);
  const navLink10 = useRef(null);

  const navLinkArr = [
    navLink1,
    navLink2,
    navLink3,
    navLink4,
    navLink5,
    navLink6,
    navLink7,
    navLink8,
    navLink9,
    navLink10,
  ];

  useNavLink(navLinkArr);

  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center uppercase">
      <div className="left">
        <Link to="/" className="logo inline-block" ref={navLink1}>
          Lubenis.
        </Link>
      </div>
      <div className="mid flex gap-5">
        <Link to="/" className="link-item" ref={navLink2}>
          Home
        </Link>
        <Link to="/products" className="link-item" ref={navLink3}>
          Products
        </Link>
        <Link to="/orders" className="link-item" ref={navLink4}>
          Orders
        </Link>
        {user && (
          <Link to="/profile" className="link-item" ref={navLink5}>
            Profile
          </Link>
        )}
        <Link to="/about" className="link-item" ref={navLink6}>
          About
        </Link>
        <Link to="/contact" className="link-item" ref={navLink7}>
          Contact
        </Link>
      </div>
      <div className="right flex gap-5">
        <Link to="/cart" className="link-item" ref={navLink8}>
          Cart{" "}
          <span className="cart-count absolute -top-5 left-0 w-5 h-5 bg-gray-700 text-gray-50 flex justify-center items-center">
            {products.length}
          </span>
        </Link>
        {user ? (
          <button
            className="uppercase link-item"
            onClick={handleSignOut}
            ref={navLink9}
          >
            Sign out
          </button>
        ) : (
          <Link to="/sign-in" className="link-item" ref={navLink10}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
