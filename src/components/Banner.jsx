import { Link } from "react-router-dom";
import banner from "./../assets/banner.jpg";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="h-screen">
      <img
        className="w-full h-full absolute bg-cover bg-no-repeat -z-30"
        src={banner}
        alt="Banner Image"
      />
      <div className="flex flex-col justify-center items-center gap-6 text-white text-center bg-gray-800 w-full h-full opacity-80 px-6 pt-32 pb-14">
        <h1 className="text-2xl md:text-5xl font-bold max-w-2xl">
          Your Gateway to Tech Wonders.
        </h1>
        <p className="max-w-xl">
          Unleash the Power of Innovation with Our Wide Range of Cutting-Edge
          Electronics. From Smart Home Solutions to Personal Gadgets, We&apos;ve
          Got Your Tech Needs Covered.
        </p>
        <Link to="/login">
          <Button>Connected With Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
