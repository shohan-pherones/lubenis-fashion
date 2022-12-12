import { Link } from "react-router-dom";

const DesignersPick = () => {
  return (
    <div className="designers-pick container mx-auto py-20 grid grid-cols-5 gap-10 h-screen">
      <div className="left">
        <img
          src="https://images.pexels.com/photos/3615455/pexels-photo-3615455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Brown Coat Standing on Bridge"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mid col-span-2 flex flex-col gap-10">
        <div className="top h-full flex-[4]">
          <img
            src="https://images.pexels.com/photos/14610786/pexels-photo-14610786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman in Suit in Black and White"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bottom h-full flex-1 grid grid-cols-4 gap-5">
          <img
            src="https://images.pexels.com/photos/14610786/pexels-photo-14610786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman in Suit in Black and White"
            className="w-full h-full object-cover cursor-pointer"
          />
          <img
            src="https://images.pexels.com/photos/2805050/pexels-photo-2805050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Placing Her Left Hand on Her Chin"
            className="w-full h-full object-cover cursor-pointer"
          />
          <img
            src="https://images.pexels.com/photos/3395708/pexels-photo-3395708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Sitting on Floor"
            className="w-full h-full object-cover cursor-pointer"
          />
          <img
            src="https://images.pexels.com/photos/2905823/pexels-photo-2905823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo Of Woman Tying Her hair"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="right col-span-2 flex flex-col gap-10">
        <div className="top flex-[2]">
          <span className="text-7xl uppercase font-semibold">
            <span className="text-cyan-500">Designer's</span> Pick
          </span>
        </div>
        <div className="mid flex-[3]">
          <p className="text-2xl uppercase mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut fugit
            quibusdam, minus cumque quos sunt deleniti commodi repellat a id rem
            saepe atque non repudiandae possimus! Molestiae vero in aliquid.
          </p>
          <Link
            to="/products"
            className="uppercase text-2xl font-medium text-cyan-500"
          >
            Shop now
          </Link>
        </div>
        <div className="bottom flex-[3]">
          <p className="text-2xl uppercase mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            corporis temporibus ipsum error dicta dignissimos qui amet enim ad
            consequatur excepturi soluta sint, doloribus, neque eum quam numquam
            accusantium ducimus.
          </p>
          <Link
            to="/products"
            className="uppercase text-2xl font-medium text-rose-500"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignersPick;
