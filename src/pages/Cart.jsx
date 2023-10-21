import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CartProducts from "../components/CartProducts";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartDetails, setCartDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartDetails(data);
      });
  }, [user.email]);
  const cartProducts = cartDetails?.cartProducts;
    // console.log(cartProducts);

  return (
    <div className="dark:bg-gray-800">
    <div className="max-w-7xl text-gray-900 dark:text-gray-200 py-10 px-4 sm:px-6 lg:px-8 lg:pt-32 mx-auto space-y-3">
      <h2 className="text-4xl font-semibold dark:text-white text-center">My Cart</h2>
      <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
        {cartProducts ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
            {cartProducts.map((productDetail) => (
              <CartProducts
                productDetail={productDetail}
                key={productDetail.productId}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-center py-20 text-2xl md:text-5xl font-bold">
            Cart is Empty!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
