import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero container mx-auto py-10 h-[calc(100vh-5rem)] w-full grid grid-cols-8 gap-10">
      <div className="left col-span-2">
        <img
          src="https://images.pexels.com/photos/2715287/pexels-photo-2715287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman With Blond Hair"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mid col-span-5 flex flex-col gap-10">
        <h1 className="text-9xl uppercase font-semibold">
          A new revolution, a new perspective.
        </h1>
        <Link
          to="/products"
          className="flex items-center gap-2 uppercase text-2xl font-medium text-cyan-500 self-start group"
        >
          Shop now{" "}
          <span>
            <BsArrowRight className="group-hover:translate-x-5 duration-500 ease-in-out" />
          </span>
        </Link>
      </div>
      <div className="right flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/14610788/pexels-photo-14610788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Clear Sky over Woman Posing"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/1845831/pexels-photo-1845831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman In Blue Jeans Sitting On Pile Of Wood"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/11608681/pexels-photo-11608681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Attractive Woman in Bra with Shoulder Straps Dropping "
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/3799361/pexels-photo-3799361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Knitted Sweater"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
