import { Link } from "react-router-dom";
import logo from "/electra-logo.png";


const Logo = () => {
    return (
        <>
            <Link
              className="flex items-center gap-1 font-mono text-xl font-semibold dark:text-white"
              to="/"
              aria-label="Brand"
            >
              <img className="h-8" src={logo} alt="" />
              <span>Electra</span>
            </Link>
        </>
    );
};

export default Logo;