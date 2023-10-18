import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-500 dark:bg-gray-800 border-t">
      <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300">
              Unleash the Power of Innovation with Our Wide Range of
              Cutting-Edge Electronics. From Smart Home Solutions to Personal
              Gadgets, We&apos;ve Got Your Tech Needs Covered.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Important Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/login"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/cart"
                >
                  Cart
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Follow Us On</h4>

            <div className="mt-4">
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsFacebook />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsGoogle />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2023{" "}
            <Link className="underline" to="/">
              Electra
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
