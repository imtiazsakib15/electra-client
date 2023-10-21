import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";
import { AuthContext } from "../providers/AuthProvider";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/${params.brand}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.brand, params.id]);
  const { _id, name, type, brand_name, price, rating, image, description } =
    product;
  const email = user.email;

  const handleAddToCart = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cartProducts);
        let cartProducts;
        data.cartProducts
          ? (cartProducts = [...data.cartProducts, id])
          : (cartProducts = [id]);

        const cartDetails = { email, cartProducts };

        fetch("http://localhost:5000/cart", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      });
  };

  // const handleAddToCart = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:5000/cart/${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.cartProducts);

  //       const previousCartProducts = data.cartProducts;
  //       let cartProducts;
  //       previousCartProducts
  //         ? { cartProducts = previousCartProducts.map(product => product.productId === id&& product.quantity +=1)
  //                     //  cartProducts = [...data.cartProducts, { productId: id, quantity: 3 }]
  //                     }
  //         : (cartProducts = [{ productId: id, quantity: 1 }]);

  //       // const cartDetails = { email, cartProducts };

  //       fetch("http://localhost:5000/cart", {
  //         method: "PATCH",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         // body: JSON.stringify(cartDetails),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     });
  // };

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
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold">Description: </span>
          {description}
        </p>
        <button onClick={() => handleAddToCart(_id)}>
          <Button>Add To Cart</Button>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
