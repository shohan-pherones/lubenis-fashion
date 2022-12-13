import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container mx-auto py-20 grid grid-cols-5 gap-10 items-start uppercase">
      <div className="one flex flex-col gap-1  items-start">
        <Link to="/" className="logo mb-5 inline-block font-semibold">
          Lubenis.
        </Link>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          &copy; {new Date().getFullYear()} Lubenis Fashion. All rights
          reserved.
        </p>
      </div>
      <div className="two flex flex-col gap-1 items-start">
        <span className="mb-5 font-semibold">Navigate</span>
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
      <div className="three flex flex-col gap-1 items-start">
        <span className="mb-5 font-semibold">News</span>
        <Link to="/blogs" className="link-item">
          Blogs
        </Link>
        <Link to="/updates" className="link-item">
          Updates
        </Link>
        <Link to="/editorial-picks" className="link-item">
          Editorial pick's
        </Link>
        <Link to="/turbulence" className="link-item">
          Turbulence FW
        </Link>
      </div>
      <div className="four flex flex-col gap-1 items-start">
        <span className="mb-5 font-semibold">Support</span>
        <Link to="/help" className="link-item">
          Help center
        </Link>
        <Link to="/emergency" className="link-item">
          Emergency
        </Link>
        <Link to="/report" className="link-item">
          Report
        </Link>
        <Link to="/any-query" className="link-item">
          Any query?
        </Link>
      </div>
      <div className="five flex flex-col gap-1 items-start">
        <span className="mb-5 font-semibold">Privacy & policy</span>
        <Link to="/conditions" className="link-item">
          Conditions
        </Link>
        <Link to="/offers" className="link-item">
          Offers
        </Link>
        <Link to="/career" className="link-item">
          Get career
        </Link>
        <Link to="/lubenis-club" className="link-item">
          Lubenis club
        </Link>
      </div>
    </div>
  );
};

export default Footer;
