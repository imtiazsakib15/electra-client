import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import BrandDetails from "../pages/BrandDetails";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/new",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/:brand/products",
        element: <BrandDetails />,
      },
      {
        path: "/:brand/products/:productName/:id",
        element: <ProductDetails />,
      },
      {
        path: "/:brand/products/:id/update",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default Router;
