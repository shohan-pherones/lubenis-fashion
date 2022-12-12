import CaseStudy from "../components/CaseStudy";
import Categories from "../components/Categories";
import DesignersPick from "../components/DesignersPick";
import Fashion from "../components/Fashion";
import Featured from "../components/Featured";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <Featured />
      <CaseStudy />
      <Fashion />
      <DesignersPick />
      <GetInTouch />
    </div>
  );
};

export default Home;
