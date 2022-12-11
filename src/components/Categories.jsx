import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories container mx-auto py-20 grid grid-cols-5 gap-10">
      <Link to="/products" className="category">
        <img
          src="https://images.pexels.com/photos/9711296/pexels-photo-9711296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Woman in White Long Sleeves Looking with Her Hand on Her Hair"
          className="w-full h-[50vh] object-cover"
        />
      </Link>
      <Link to="/products" className="category">
        <img
          src="https://images.pexels.com/photos/2480450/pexels-photo-2480450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Standing on Grass Field Under White Clouds and Blue Sky"
          className="w-full h-[50vh] object-cover"
        />
      </Link>
      <Link to="/products" className="category">
        <img
          src="https://images.pexels.com/photos/4355598/pexels-photo-4355598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Wearing Glittering Pants"
          className="w-full h-[50vh] object-cover"
        />
      </Link>
      <Link to="/products" className="category">
        <img
          src="https://images.pexels.com/photos/6900287/pexels-photo-6900287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman lying with legs up against blue sky"
          className="w-full h-[50vh] object-cover"
        />
      </Link>
      <Link to="/products" className="category">
        <img
          src="https://images.pexels.com/photos/9158468/pexels-photo-9158468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Low Angle Shot of a Woman in Brown Dress Standing on the Field"
          className="w-full h-[50vh] object-cover"
        />
      </Link>
    </div>
  );
};

export default Categories;
