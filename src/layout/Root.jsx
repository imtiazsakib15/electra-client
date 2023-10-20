import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
