import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

const BrandDetails = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const brandName = params.brand;

  useEffect(() => {
    fetch(`http://localhost:5000/${brandName}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [brandName]);

  let sliderImg = [];
  if (brandName == "Apple") {
    sliderImg = [
      "https://i.ibb.co/XbHXnV3/apple-2-min.jpg",
      "https://i.ibb.co/z2s0NP7/apple-3-min.jpg",
      "https://i.ibb.co/p2dRgrP/apple-1-min.jpg",
    ];
  }
  if (brandName == "Samsung") {
    sliderImg = [
      "https://i.ibb.co/gPSMG63/samsung-2-min.jpg",
      "https://i.ibb.co/rwDS0xp/samsung-1-min.jpg",
      "https://i.ibb.co/bBwm5v5/samsung-3.webp",
    ];
  }
  if (brandName == "Google") {
    sliderImg = [
      "https://i.ibb.co/vPf8MR4/google-1-min.jpg",
      "https://i.ibb.co/bbRmV5K/google-2-min.jpg",
      "https://i.ibb.co/BcH1phK/google-3-min.jpg",
    ];
  }
  if (brandName == "Xiaomi") {
    sliderImg = [
      "https://i.ibb.co/c164kFn/xiaomi-1-min.jpg",
      "https://i.ibb.co/z44mgFT/xiaomi-2-min.jpg",
      "https://i.ibb.co/WHp72Ht/xioamo-3-min.jpg",
    ];
  }
  if (brandName == "Huawei") {
    sliderImg = [
      "https://i.ibb.co/G5SgR25/huawei-1-min.jpg",
      "https://i.ibb.co/TRsKFcS/huawei-2-min.jpg",
      "https://i.ibb.co/WvZ2wSG/huawei-3.jpg",
    ];
  }
  if (brandName == "Dell") {
    sliderImg = [
      "https://i.ibb.co/w7BrTt9/dell-1-min.jpg",
      "https://i.ibb.co/fXWyRdj/dell-2-min.jpg",
      "https://i.ibb.co/D4SVq27/dell-3-min.jpg",
    ];
  }
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-7xl pb-10 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 mx-auto ">
        <Slider sliderImg={sliderImg} />
        <div className="mt-16 mb-8">
          <h2 className="text-4xl font-semibold text-center dark:text-white">
            Products
          </h2>
          <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
        </div>
        {products.length === 0 ? (
          <div className="my-40">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 text-center">
              Sorry, No Product Available!
            </h2>
          </div>
        ) : (
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
