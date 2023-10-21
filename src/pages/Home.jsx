import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Testimonial from "../components/Testimonial";
import TopBrands from "../components/TopBrands";

const Home = () => {window.scrollTo(0,0)
  return (
    <>
      <Banner />
      <div className="dark:bg-gray-800">
        <TopBrands />
        <Testimonial />
        <Blog />
      </div>
    </>
  );
};

export default Home;
