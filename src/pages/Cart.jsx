import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CartProducts from "../components/CartProducts";
import toast from "react-hot-toast";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data?.cartProducts || []);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const previousCartProducts = data.cartProducts;
        let cartProducts = previousCartProducts.filter(
          (product) => product.productId !== id
        );
        setCartProducts(cartProducts);

        const cartDetails = { email: user.email, cartProducts };

        fetch("http://localhost:5000/cart", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) toast.success("Deleted Successfully!");
          });
      });
  };
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-7xl text-gray-900 dark:text-gray-200 py-10 px-4 sm:px-6 lg:px-8 lg:pt-32 mx-auto space-y-3">
        <h2 className="text-4xl font-semibold dark:text-white text-center">
          My Cart
        </h2>
        <div className="border-2 border-blue-800 w-28 mt-1 mx-auto"></div>
        {cartProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
            {cartProducts.map((productDetail) => (
              <CartProducts
                productDetail={productDetail}
                handleDelete={handleDelete}
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
