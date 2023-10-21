import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/${params.brand}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.brand, params.id]);
  const { name, type, brand_name, price, rating, image, description } = product;
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-7xl text-gray-900 dark:text-gray-200 py-10 px-4 sm:px-6 lg:px-8 lg:pt-32 mx-auto space-y-3">
        <img className="mx-auto" src={image} alt="" />
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          {name}
        </h2>
        <p>
          <span className="font-semibold">Brand:</span> {brand_name}
        </p>
        <p>
          <span className="font-semibold">Product type:</span> {type}
        </p>
        {rating && (
          <span className="flex items-center font-medium gap-1">
            Rating:{" "}
            <ReactStars
              count={5}
              size={26}
              value={parseFloat(rating)}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffa142"
            />
            <span className="text-base font-normal">({rating})</span>
          </span>
        )}
        <p>
          <span className="text-lg font-semibold">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold">Description: </span>
          {description}
        </p>
        <Link className="block w-max">
          <Button>Add To Cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
