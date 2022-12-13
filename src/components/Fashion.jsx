import FashionVideo from "../assets/videos/pexels-cottonbro-9512045.mp4";

const Fashion = () => {
  return (
    <div className="fashion container mx-auto py-20 flex flex-col gap-10">
      <div className="top flex justify-between">
        <span className="text-7xl uppercase font-semibold">
          WEEK PICK - <span className="text-rose-500">Lubenis.</span>
        </span>
        <span className="text-7xl uppercase font-semibold">
          FW'{" "}
          {new Date().toLocaleDateString("en-us", {
            month: "long",
          })}
        </span>
      </div>
      <div className="bottom relative flex flex-col gap-5">
        <p className="text-2xl">
          Fashion is a religion in one sense. Once upon a time, our brand was
          considered the sanctum sanctorum of fashion. I want to produce things
          that people really want to buy.
        </p>
        <video src={FashionVideo} autoPlay muted loop />
        <span className="text-9xl uppercase font-semibold text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          Turbulence q-nine
        </span>
        <p className="text-2xl">
          Humor is a big part of my style. You have to be willing to fall on
          your face a bit, to be that fashion roadkill. I know so many people
          who are die-hard fashion people who are way more educated than I am,
          but I love fashion. It's so much more important than just material. As
          a woman gets older, it's more about style than fashion. A woman
          knowing herself more and more, and looking for new things, is getting
          into her own personal style, being more than just a fashion addict.
          I'm interested in that.
        </p>
      </div>
    </div>
  );
};

export default Fashion;
