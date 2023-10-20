import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import TopBrands from "../components/TopBrands";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="dark:bg-gray-800">
        <TopBrands />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
