import { Link } from "react-router-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Hero = () => {
  return (
    <div className="hero container mx-auto py-10 h-[calc(100vh-5rem)] w-full grid grid-cols-8 gap-10">
      <div className="left col-span-2">
        <img
          src="https://images.pexels.com/photos/9904582/pexels-photo-9904582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in a Black Tank Top Posing Beside a Rock"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mid col-span-5 flex flex-col gap-10">
        <h1 className="text-9xl uppercase font-semibold">
          A new revolution, a new perspective.
        </h1>
        <Link
          to="/products"
          className="uppercase text-2xl font-medium text-cyan-500"
        >
          Shop now <NorthEastIcon />
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
