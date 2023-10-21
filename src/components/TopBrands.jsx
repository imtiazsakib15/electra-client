import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loadBrands, setLoadBrands] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoadBrands(false);
      });
  }, []);

  return (
    <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto text-center">
      <h2 className="text-4xl font-semibold dark:text-white">Top Brands</h2>
      <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
      {loadBrands ? (
        <div className="h-32 grid place-items-center mt-20">
          <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {brands?.map((brand) => (
            <Link
              to={`/${brand.name}/products`}
              key={brand._id}
              className="bg-gray-200 dark:bg-gray-600 p-10 rounded"
            >
              <img className="mx-auto" src={brand?.image} alt={brand?.name} />
              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {brand?.name}
              </h5>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBrands;
