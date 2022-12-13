import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealUp = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.5,
        ease: Power4.easeInOut,
        delay: 0.5,
      }
    );
  }, [item]);
};

export const useTranslateUp = (items) => {
  useEffect(() => {
    const els = items.map((item) => item.current);

    gsap.fromTo(
      els,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        ease: Power4.easeInOut,
        stagger: 0.2,
        delay: 2,
      }
    );
  }, [items]);
};

export const useLeftSlide = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: Power4.easeInOut,
        delay: 2.5,
      }
    );
  }, [item]);
};

export const useHeroRightImg = (items) => {
  useEffect(() => {
    const els = items.map((item) => item.current);

    gsap.fromTo(
      els,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: Power4.easeInOut,
        stagger: 0.2,
        delay: 1,
      }
    );
  }, [items]);
};

export const useNavLink = (items) => {
  useEffect(() => {
    const els = items.map((item) => item.current);

    gsap.fromTo(
      els,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: Power4.easeInOut,
        stagger: 0.2,
        delay: 2.5,
      }
    );
  }, [items]);
};
