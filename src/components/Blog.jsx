import { Link } from "react-router-dom";
import iotImage from "./../assets/iot-image.jpg";
import bitcoin from "./../assets/bitcoin.jpeg";
import cyberSecurity from "./../assets/cyber-security.webp";

const Blog = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pb-16">
      <h2 className="text-4xl font-semibold dark:text-white text-center">
        Blogs
      </h2>
      <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="p-4 bg-white border rounded-lg dark:bg-gray-800 flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={iotImage} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Internet of Things (IoT) in Smart Cities: Enhancing Urban Living
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Discuss how IoT technology is being utilized to create smarter and
            more sustainable cities, optimizing resources and improving the
            quality of life for residents.
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 bg-white border rounded-lg dark:bg-gray-800 flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={bitcoin} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Blockchain Beyond Cryptocurrency: Exploring Diverse Applications
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Blockchain technology is being harnessed for purposes beyond digital
            currency, such as supply chain management, healthcare, and voting
            systems.
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 bg-white border rounded-lg dark:bg-gray-800 flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={cyberSecurity} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cybersecurity in the Age of Remote Work: Best Practices and Emerging
            Threats
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Provide insights into the evolving landscape of cybersecurity in a
            world where remote work has become the norm, highlighting both
            security measures and potential risks.
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
