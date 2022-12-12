import CaseStudy from "../components/CaseStudy";
import Categories from "../components/Categories";
import DesignersPick from "../components/DesignersPick";
import Fashion from "../components/Fashion";
import Featured from "../components/Featured";
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
    </div>
  );
};

export default Home;
