import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/${params.brand}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [params.brand, params.id]);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const brand_name = form.brand_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const description = form.description.value;

    const product = {
      name,
      type,
      brand_name,
      price,
      rating,
      image,
      description,
    };
    Swal.fire({
      title: "Do you want to update the product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't update`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${params.id}/update`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Product updated!", "", "success");
              form.reset();
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Product is not updated", "", "info");
      }
    });
  };
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-5xl pt-28 px-4 sm:px-6 lg:px-8 lg:pt-36 pb-14 mx-auto">
        <h2 className="text-4xl font-semibold dark:text-white text-center">
          Update Product
        </h2>
        <div className="border-2 border-blue-800 w-28 mt-1 mx-auto mb-8"></div>
        <form onSubmit={handleUpdateProduct}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={product?.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                defaultValue={product?.type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone, Computer, Headphone etc"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brand_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a brand
              </label>
              <select
                id="brand_name"
                name="brand_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value={product?.brand_name}>
                  {product?.brand_name}
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Huawei">Huawei</option>
                <option value="Dell">Dell</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min={0}
                defaultValue={product?.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                min={0}
                max={5}
                defaultValue={product?.rating}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo url
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={product?.image}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Photo url"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Short description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={product?.description}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write about product..."
              required
            ></textarea>
          </div>
          <button type="submit">
            <Button>Update product</Button>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
