import CaseStudy from "../components/CaseStudy";
import Categories from "../components/Categories";
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
    </div>
  );
};

export default Home;
