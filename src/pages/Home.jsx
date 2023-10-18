import Banner from "../components/Banner";
import TopBrands from "../components/TopBrands";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="dark:bg-gray-800">
        <TopBrands />
      </div>
    </>
  );
};

export default Home;
