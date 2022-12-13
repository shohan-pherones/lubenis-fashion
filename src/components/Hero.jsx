import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import {
  useRevealUp,
  useTranslateUp,
  useLeftSlide,
  useHeroRightImg,
} from "../hooks/gsap";

const Hero = () => {
  const heroLeftShutter = useRef(null);
  const heroHeadline1 = useRef(null);
  const heroHeadline2 = useRef(null);
  const heroHeadline3 = useRef(null);
  const heroHeadline4 = useRef(null);
  const shopBtn = useRef(null);
  const heroRightImg1 = useRef(null);
  const heroRightImg2 = useRef(null);
  const heroRightImg3 = useRef(null);
  const heroRightImg4 = useRef(null);

  const heroHeadlineArr = [
    heroHeadline1,
    heroHeadline2,
    heroHeadline3,
    heroHeadline4,
  ];

  const heroRightImgArr = [
    heroRightImg1,
    heroRightImg2,
    heroRightImg3,
    heroRightImg4,
  ];

  useRevealUp(heroLeftShutter);
  useTranslateUp(heroHeadlineArr);
  useLeftSlide(shopBtn);
  useHeroRightImg(heroRightImgArr);

  return (
    <div className="hero container mx-auto py-10 h-[calc(100vh-5rem)] w-full grid grid-cols-8 gap-10">
      <div className="left col-span-2 relative">
        <img
          src="https://images.pexels.com/photos/2715287/pexels-photo-2715287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman With Blond Hair"
          className="w-full h-full object-cover"
        />
        <span
          ref={heroLeftShutter}
          className="hero-left-shutter absolute top-0 left-0 bottom-0 right-0 bg-stone-50 z-[1]"
        ></span>
      </div>
      <div className="mid col-span-5 flex flex-col gap-10">
        <div className="text-9xl uppercase font-semibold flex flex-col gap-5">
          <div className="box h-32 overflow-hidden">
            <span ref={heroHeadline1} className="translate-y-full inline-block">
              A new
            </span>
          </div>
          <div className="box h-32 overflow-hidden">
            <span ref={heroHeadline2} className="translate-y-full inline-block">
              revolution,
            </span>
          </div>
          <div className="box h-32 overflow-hidden">
            <span ref={heroHeadline3} className="translate-y-full inline-block">
              a new
            </span>
          </div>
          <div className="box h-32 overflow-hidden">
            <span ref={heroHeadline4} className="translate-y-full inline-block">
              perspective.
            </span>
          </div>
        </div>
        <Link
          ref={shopBtn}
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
          ref={heroRightImg1}
          src="https://images.pexels.com/photos/14610788/pexels-photo-14610788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Clear Sky over Woman Posing"
          className="w-full h-full object-cover"
        />
        <img
          ref={heroRightImg2}
          src="https://images.pexels.com/photos/1845831/pexels-photo-1845831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman In Blue Jeans Sitting On Pile Of Wood"
          className="w-full h-full object-cover"
        />
        <img
          ref={heroRightImg3}
          src="https://images.pexels.com/photos/11608681/pexels-photo-11608681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Attractive Woman in Bra with Shoulder Straps Dropping "
          className="w-full h-full object-cover"
        />
        <img
          ref={heroRightImg4}
          src="https://images.pexels.com/photos/3799361/pexels-photo-3799361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Knitted Sweater"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
