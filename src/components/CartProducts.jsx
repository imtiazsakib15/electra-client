import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CartProducts = ({ productDetail, handleDelete }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productDetail.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productDetail.productId]);

  return (
    product && (
      <ProductCard
        product={product}
        quantity={productDetail.quantity}
        handleDelete={handleDelete}
      />
    )
  );
};
CartProducts.propTypes = {
  productDetail: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default CartProducts;
