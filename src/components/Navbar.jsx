import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center uppercase">
      <div className="left">
        <span className="logo">Lubenis.</span>
      </div>
      <div className="mid flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right flex gap-5">
        <Link to="/cart" className="relative">
          Cart{" "}
          <span className="cart-count absolute -top-5 left-0 w-5 h-5 bg-gray-700 text-gray-50 flex justify-center items-center">
            {products.length}
          </span>
        </Link>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
