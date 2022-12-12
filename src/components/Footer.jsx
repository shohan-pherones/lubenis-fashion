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
        <Link to="/blogs">Blogs</Link>
        <Link to="/updates">Updates</Link>
        <Link to="/editorial-picks">Editorial pick's</Link>
        <Link to="/turbulence">Turbulence FW</Link>
      </div>
      <div className="four flex flex-col gap-1">
        <span className="mb-5 font-semibold">Support</span>
        <Link to="/help">Help center</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/report">Report</Link>
        <Link to="/any-query">Any query?</Link>
      </div>
      <div className="five flex flex-col gap-1">
        <span className="mb-5 font-semibold">Privacy & policy</span>
        <Link to="/conditions">Conditions</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/career">Get career</Link>
        <Link to="/lubenis-club">Lubenis club</Link>
      </div>
    </div>
  );
};

export default Footer;
