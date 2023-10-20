import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const { _id, image, name, brand_name, type, price, rating } = product;

  return (
    <div className="border rounded-md shadow-md text-center font-medium space-y-4 p-6 text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-600">
      <img className="mx-auto h-60" src={image} alt="" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="flex justify-between">
        <p>Brand: {brand_name}</p>
        <p>Type: {type}</p>
      </div>
      <div className="flex justify-between">
        <p>${price}</p>
        <ReactStars
          count={5}
          size={22}
          value={parseFloat(rating)}
          edit={false}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffa142"
        />
      </div>
      <div className="flex justify-between">
        <Link
          to={`/${brand_name}/products/${name.split(" ").join("-")}/${_id}`}
        >
          <Button>View Details</Button>
        </Link>
        <Link to={`/${brand_name}/products/${_id}/update`}>
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
