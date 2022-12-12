import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories container mx-auto py-20 grid grid-cols-5 gap-10">
      <Link to="/products" className="category relative group overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9711296/pexels-photo-9711296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Woman in White Long Sleeves Looking with Her Hand on Her Hair"
          className="w-full h-[50vh] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 duration-1000"
        />
        <span className="category-text absolute left-1/2 -bottom-10 text-white uppercase -translate-x-[50%] text-4xl font-semibold z-[2] group-hover:bottom-10 duration-1000">
          Tops
        </span>
        <span className="category-shutter absolute top-0 left-0 bottom-0 right-0 bg-black h-0 group-hover:h-40 group-hover:top-[75%] z-[1]"></span>
      </Link>
      <Link to="/products" className="category relative group overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2480450/pexels-photo-2480450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Standing on Grass Field Under White Clouds and Blue Sky"
          className="w-full h-[50vh] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 duration-1000"
        />
        <span className="category-text absolute left-1/2 -bottom-10 text-white uppercase -translate-x-[50%] text-4xl font-semibold z-[2] group-hover:bottom-10 duration-1000">
          Skirts
        </span>
        <span className="category-shutter absolute top-0 left-0 bottom-0 right-0 bg-black h-0 group-hover:h-40 group-hover:top-[75%] z-[1]"></span>
      </Link>
      <Link to="/products" className="category relative group overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4355598/pexels-photo-4355598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Wearing Glittering Pants"
          className="w-full h-[50vh] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 duration-1000"
        />
        <span className="category-text absolute left-1/2 -bottom-10 text-white uppercase -translate-x-[50%] text-4xl font-semibold z-[2] group-hover:bottom-10 duration-1000">
          Pants
        </span>
        <span className="category-shutter absolute top-0 left-0 bottom-0 right-0 bg-black h-0 group-hover:h-40 group-hover:top-[75%] z-[1]"></span>
      </Link>
      <Link to="/products" className="category relative group overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6900287/pexels-photo-6900287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman lying with legs up against blue sky"
          className="w-full h-[50vh] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 duration-1000"
        />
        <span className="category-text absolute left-1/2 -bottom-10 text-white uppercase -translate-x-[50%] text-4xl font-semibold z-[2] group-hover:bottom-10 duration-1000">
          Shoes
        </span>
        <span className="category-shutter absolute top-0 left-0 bottom-0 right-0 bg-black h-0 group-hover:h-40 group-hover:top-[75%] z-[1]"></span>
      </Link>
      <Link to="/products" className="category relative group overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9158468/pexels-photo-9158468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Low Angle Shot of a Woman in Brown Dress Standing on the Field"
          className="w-full h-[50vh] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 duration-1000"
        />
        <span className="category-text absolute left-1/2 -bottom-10 text-white uppercase -translate-x-[50%] text-4xl font-semibold z-[2] group-hover:bottom-10 duration-1000">
          Dresses
        </span>
        <span className="category-shutter absolute top-0 left-0 bottom-0 right-0 bg-black h-0 group-hover:h-40 group-hover:top-[75%] z-[1]"></span>
      </Link>
    </div>
  );
};

export default Categories;
