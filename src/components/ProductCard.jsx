import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { image, name, brand_name, type, price, rating } = product;
  return (
    <div className="border rounded-md shadow-md text-center font-medium space-y-4 p-6 text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-600">
      <img className="mx-auto h-60" src={image} alt="" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="flex justify-between">
        <p>Brand: {brand_name}</p>
        <p>Type: {type}</p>
      </div>
      <div className="flex justify-between">
        <p>price: ${price}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className="flex justify-between">
        <Link>
          <Button>View Details</Button>
        </Link>
        <Link>
          <button className="text-gray-900 dark:text-gray-200 hover:text-white text-sm font-bold hover:bg-gradient-to-tl hover:from-blue-600 hover:to-violet-600 border-2 border-blue-600 shadow-lg shadow-transparent hover:shadow-blue-700/50  rounded-full py-3 px-6">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
