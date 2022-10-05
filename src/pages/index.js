import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authenticate, getUser } from "../services";
import ErrorPage from "./error";
import Auth from "./auth";
import Home from "./home";
import User from "./user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:username",
    element: <User />,
    errorElement: <ErrorPage message="User not found" />,
    loader: getUser,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage message="Authentication Error" />,
    loader: authenticate,
  },
]);

function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
