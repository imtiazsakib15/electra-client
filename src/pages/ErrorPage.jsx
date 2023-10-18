import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className="text-center dark:bg-gray-800 flex flex-col justify-center items-center h-screen py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
        404
      </h1>
      <h1 className="block text-2xl font-bold text-white"></h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400 md:text-lg font-medium">
        Oops, something went wrong.
      </p>
      <p className="text-gray-600 dark:text-gray-400 md:text-lg font-medium">
        Sorry, we couldn&apos;t find your page.
      </p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
