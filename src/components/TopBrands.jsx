import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto text-center">
      <h2 className="text-4xl font-semibold dark:text-white">Top Brands</h2>
      <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {brands?.map((brand) => (
          <div
            onClick={() => navigate("/:brand.name")}
            key={brand._id}
            className="bg-gray-200 p-10 rounded"
          >
            <img className="mx-auto" src={brand?.image} alt={brand?.name} />
            <h5>{brand?.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
