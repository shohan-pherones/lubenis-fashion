import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="case-study container mx-auto py-20 grid grid-cols-4 grid-rows-3 gap-10 h-screen">
      <div className="model row-span-3">
        <img
          src="https://images.pexels.com/photos/4622212/pexels-photo-4622212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Gray Long Sleeve Shirt Playing Chess"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="saying col-span-3">
        <p className="text-2xl">
          You can never take too much care over the choice of your shoes. Too
          many women think that they are unimportant, but the real proof of an
          elegant woman is what is on her feet. A little bad taste is like a
          nice splash of paprika. We all need a splash of bad taste—it's hearty,
          it's healthy, it's physical. I think we could use more of it. No taste
          is what I'm against.
        </p>
      </div>
      <div className="designer row-span-2">
        <img
          src="https://images.pexels.com/photos/4622409/pexels-photo-4622409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Man in Gray and Black Zip Up Jacket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="details col-span-2">
        <span className="text-7xl uppercase font-semibold">
          Persona el firenzes x{" "}
          <span className="text-cyan-500">
            case study' {new Date().getFullYear()}
          </span>
        </span>
      </div>
      <div className="bio uppercase">
        <span className="text-4xl font-medium">Rebecca Parker</span>
        <p className="text-gray-400">Senior Fashion Designer</p>
        <Link to="/" className="link-item">
          Lubenis.
        </Link>
      </div>
      <div className="address">
        <p className="text-2xl">
          The dress must follow the body of a woman, not the body following the
          shape of the dress.
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
