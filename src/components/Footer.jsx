import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container mx-auto py-20 grid grid-cols-5 gap-10 items-start uppercase">
      <div className="one flex flex-col gap-1">
        <Link to="/" className="logo mb-5 inline-block font-semibold">
          Lubenis.
        </Link>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          &copy; {new Date().getFullYear()} Lubenis Fashion. All rights
          reserved.
        </p>
      </div>
      <div className="two flex flex-col gap-1">
        <span className="mb-5 font-semibold">Navigate</span>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="three flex flex-col gap-1">
        <span className="mb-5 font-semibold">News</span>
        <Link to="/products">Blogs</Link>
        <Link to="/orders">Updates</Link>
        <Link to="/about">Editorial pick's</Link>
        <Link to="/contact">Turbulence FW</Link>
      </div>
      <div className="four flex flex-col gap-1">
        <span className="mb-5 font-semibold">Support</span>
        <Link to="/products">Help center</Link>
        <Link to="/orders">Emergency</Link>
        <Link to="/about">Report</Link>
        <Link to="/contact">Any query?</Link>
      </div>
      <div className="five flex flex-col gap-1">
        <span className="mb-5 font-semibold">Privacy & policy</span>
        <Link to="/products">Conditions</Link>
        <Link to="/orders">Offers</Link>
        <Link to="/about">Get career</Link>
        <Link to="/contact">Lubenis club</Link>
      </div>
    </div>
  );
};

export default Footer;
