import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getUser from "../services/get-user";
import ErrorPage from "./error";
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
    errorElement: <ErrorPage />,
    loader: getUser,
  },
]);

function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
