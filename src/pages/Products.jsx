import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products container mx-auto py-20 grid grid-cols-5 gap-10">
      <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sexy Woman in Sunglasses Posing Outdoors"
          className="w-full h-full object-cover"
        />
        <div>
          <h3 className="text-xl uppercase">
            Dotline swiss black top with coat
          </h3>
          <p className="text-xl text-rose-500">$24.99</p>
        </div>
      </Link>
      <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sexy Woman in Sunglasses Posing Outdoors"
          className="w-full h-full object-cover"
        />
        <div>
          <h3 className="text-xl uppercase">
            Dotline swiss black top with coat
          </h3>
          <p className="text-xl text-rose-500">$24.99</p>
        </div>
      </Link>
      <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sexy Woman in Sunglasses Posing Outdoors"
          className="w-full h-full object-cover"
        />
        <div>
          <h3 className="text-xl uppercase">
            Dotline swiss black top with coat
          </h3>
          <p className="text-xl text-rose-500">$24.99</p>
        </div>
      </Link>
      <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sexy Woman in Sunglasses Posing Outdoors"
          className="w-full h-full object-cover"
        />
        <div>
          <h3 className="text-xl uppercase">
            Dotline swiss black top with coat
          </h3>
          <p className="text-xl text-rose-500">$24.99</p>
        </div>
      </Link>
      <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sexy Woman in Sunglasses Posing Outdoors"
          className="w-full h-full object-cover"
        />
        <div>
          <h3 className="text-xl uppercase">
            Dotline swiss black top with coat
          </h3>
          <p className="text-xl text-rose-500">$24.99</p>
        </div>
      </Link>
    </div>
  );
};

export default Products;
