import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/404";
import ProductsPage from "./Pages/Products";
import ProfilePage from "./Pages/profilePage";
import DetailProductPage from "./Pages/detailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  }, {
    path: "/product/:id",
    element: <DetailProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
