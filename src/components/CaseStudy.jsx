import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="case-study container mx-auto py-20 grid grid-cols-4 grid-rows-3 gap-10 h-screen">
      <div className="model row-span-3">
        <img
          src="https://images.pexels.com/photos/2702800/pexels-photo-2702800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Standing Woman With Her Right Hand on Her Head"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="saying col-span-3">
        <p className="text-2xl uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis consequuntur id delectus cupiditate quod illum, sed consectetur.
          Doloribus, aliquid inventore? Rem porro reprehenderit similique et
          nihil deserunt dolore commodi?
        </p>
      </div>
      <div className="designer row-span-2">
        <img
          src="https://images.pexels.com/photos/1853050/pexels-photo-1853050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Standing Woman With Hands on Pockets Beside Heliconia Rostata Plants"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="details col-span-2">
        <span className="text-7xl uppercase font-semibold">
          Persona el firenzes x{" "}
          <span className="text-cyan-500">case study' 22</span>
        </span>
      </div>
      <div className="bio uppercase">
        <span className="text-4xl font-medium">Rebecca Parker</span>
        <p className="text-gray-400">Senior Fashion Designer</p>
        <Link to="/" className="text-rose-500">
          Lubenis.
        </Link>
      </div>
      <div className="address">
        <p className="text-2xl uppercase">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
          pariatur?
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
