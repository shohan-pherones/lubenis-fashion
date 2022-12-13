import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const img1 =
  "https://images.pexels.com/photos/14610786/pexels-photo-14610786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 =
  "https://images.pexels.com/photos/2805050/pexels-photo-2805050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img3 =
  "https://images.pexels.com/photos/3395708/pexels-photo-3395708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img4 =
  "https://images.pexels.com/photos/2905823/pexels-photo-2905823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const DesignersPick = () => {
  const [bigImg, setBigImg] = useState(img1);

  return (
    <div className="designers-pick container mx-auto py-20 grid grid-cols-5 gap-10 h-screen">
      <div className="left">
        <img
          src={bigImg}
          alt="Vertical"
          className="w-full h-full object-cover brightness-50 sepia"
        />
      </div>
      <div className="mid col-span-2 flex flex-col gap-10">
        <div className="top h-full flex-[4]">
          <img
            src={bigImg}
            alt="Square"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bottom h-full flex-1 grid grid-cols-4 gap-5">
          <img
            onClick={() => setBigImg(img1)}
            src="https://images.pexels.com/photos/14610786/pexels-photo-14610786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman in Suit in Black and White"
            className="w-full h-full object-cover cursor-pointer hover:brightness-50 duration-500"
          />
          <img
            onClick={() => setBigImg(img2)}
            src="https://images.pexels.com/photos/2805050/pexels-photo-2805050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Placing Her Left Hand on Her Chin"
            className="w-full h-full object-cover cursor-pointer hover:brightness-50 duration-500"
          />
          <img
            onClick={() => setBigImg(img3)}
            src="https://images.pexels.com/photos/3395708/pexels-photo-3395708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Sitting on Floor"
            className="w-full h-full object-cover cursor-pointer hover:brightness-50 duration-500"
          />
          <img
            onClick={() => setBigImg(img4)}
            src="https://images.pexels.com/photos/2905823/pexels-photo-2905823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Tying Her hair"
            className="w-full h-full object-cover cursor-pointer hover:brightness-50 duration-500"
          />
        </div>
      </div>
      <div className="right col-span-2 flex flex-col gap-10">
        <div className="top flex-[2]">
          <span className="text-7xl uppercase font-semibold">
            <span className="text-cyan-500">Designer's</span> Pick
          </span>
        </div>
        <div className="mid flex-[3] flex flex-col gap-5">
          <p className="text-2xl">
            What I really do believe is that anybody—and it really doesn't
            matter what shape your body is—can be seductive and sexy and
            gorgeous and beautiful. I use an extreme idea of beauty as a way of
            showing Céline, but I don't believe it has to be like that outside
            of the fashion show.
          </p>
          <Link
            to="/products"
            className="flex items-center gap-2 uppercase text-2xl font-medium text-cyan-500 self-start group"
          >
            Get ready today{" "}
            <span>
              <BsArrowRight className="group-hover:translate-x-5 duration-500 ease-in-out" />
            </span>
          </Link>
        </div>
        <div className="bottom flex-[3] flex flex-col gap-5">
          <p className="text-2xl">
            I think we all know boldness when we see it. Nothing makes me smile
            more than when I see someone being fully themselves, with their own
            individual style and character, whatever that is.
          </p>
          <Link
            to="/products"
            className="flex items-center gap-2 uppercase text-2xl font-medium text-cyan-500 self-start group"
          >
            Grab costumes{" "}
            <span>
              <BsArrowRight className="group-hover:translate-x-5 duration-500 ease-in-out" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignersPick;
