import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CartProducts = ({productDetail}) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productDetail.productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[productDetail.productId]);
    // console.log(productDetail);
    return (
        product&&<ProductCard product={product} quantity={productDetail.quantity} />
    );
};
CartProducts.propTypes = {
    productDetail: PropTypes.object,
  };
export default CartProducts;