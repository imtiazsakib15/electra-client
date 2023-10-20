import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const BrandDetails = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/${params.brand}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [params.brand]);
  
  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {products.length === 0 ? (
          <div className="my-40">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 text-center">
              Sorry, No Product Available!
            </h2>
          </div>
        ) : (
          <>
            <div className="mt-16 mb-8">
              <h2 className="text-4xl font-semibold text-center dark:text-white">
                Products
              </h2>
              <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
            </div>
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
