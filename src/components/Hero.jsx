import { Link } from "react-router-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Hero = () => {
  return (
    <div className="hero container mx-auto w-full h-[calc(100vh-5rem)] py-10 grid grid-cols-6 gap-10 overflow-hidden">
      <div className="left">
        <img
          src="https://images.pexels.com/photos/1970261/pexels-photo-1970261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Wearing Red Lace Bra"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mid col-span-4 flex flex-col gap-10 items-start">
        <h1 className="text-8xl uppercase">
          We’re all like snowflakes, all different in our own beautiful way.
        </h1>
        <Link
          to="/products"
          className="btn text-2xl uppercase text-cyan-500 font-medium group"
        >
          Shop now{" "}
          <span>
            <NorthEastIcon className="group-hover:-translate-y-2 group-hover:translate-x-2" />
          </span>
        </Link>
      </div>
      <div className="right flex flex-col gap-5">
        <img
          src="https://images.pexels.com/photos/11860595/pexels-photo-11860595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Portrait of a Woman Sitting"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/4610513/pexels-photo-4610513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Rebellious tattooed lady relaxing in skate park on sunny day"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2816479/pexels-photo-2816479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in White T-shirt"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Sitting On Yellow Padded Chair"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
