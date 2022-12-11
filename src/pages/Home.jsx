import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <Featured />
    </div>
  );
};

export default Home;
