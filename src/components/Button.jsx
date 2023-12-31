import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <span className="block cursor-pointer bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
      {children}
    </span>
  );
};
Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
