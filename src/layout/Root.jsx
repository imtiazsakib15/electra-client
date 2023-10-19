import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="dark:bg-gray-800">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
