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
        <p className="text-2xl uppercase">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          minus commodi. Suscipit, impedit. Animi eveniet officia voluptatum
          rerum tempora. Voluptate, quae commodi? Nam omnis facere dolor eum
          beatae, repellat a.
        </p>
        <video src={FashionVideo} autoPlay muted loop />
        <span className="text-9xl uppercase font-semibold text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          Turbulence q-nine
        </span>
        <p className="text-2xl uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          consectetur voluptatibus sunt reprehenderit quos eos, voluptas numquam
          soluta corrupti consequatur quam. Quisquam blanditiis facilis
          repudiandae eligendi nesciunt eius tenetur necessitatibus!
        </p>
      </div>
    </div>
  );
};

export default Fashion;
