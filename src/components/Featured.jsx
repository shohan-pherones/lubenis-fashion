import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured container mx-auto py-20 flex flex-col gap-10">
      <div className="top flex justify-between gap-10">
        <p className="flex-[2] text-2xl uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas
          esse delectus ipsa enim sapiente est? Aspernatur tempore nesciunt
          debitis unde dicta? Sed ea dolorem nisi dolore sequi, ipsa nemo?
        </p>
        <h2 className="flex-1 uppercase text-4xl font-medium text-right">
          Featured picks
        </h2>
      </div>
      <div className="mid grid grid-cols-3 gap-10">
        <Link to="/product/:id" className="col-span-2 flex flex-col gap-5">
          <img
            src="https://images.pexels.com/photos/11860595/pexels-photo-11860595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Portrait of a Woman Sitting"
            className="w-full h-full object-cover"
          />
          <div>
            <h3 className="text-2xl uppercase">
              Skate-grip sunrise orange top & bottom set
            </h3>
            <p className="text-2xl text-rose-500">$19.99</p>
          </div>
        </Link>
        <Link to="/product/:id" className="h-full w-full flex flex-col gap-5">
          <img
            src="https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sexy Woman in Sunglasses Posing Outdoors"
            className="w-full h-full object-cover"
          />
          <div>
            <h3 className="text-2xl uppercase">
              Dotline swiss black top with coat
            </h3>
            <p className="text-2xl text-rose-500">$24.99</p>
          </div>
        </Link>
      </div>
      <div className="bottom grid grid-cols-5 gap-10">
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
    </div>
  );
};

export default Featured;
