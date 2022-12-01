import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../components/RootLayout";
import AuthLayout from "../modules/Auth/AuthLayout";
import RouterProtected from "./RouterProtected";

const Home = lazy(() => import("../modules/Home"));
const Signin = lazy(() => import("../modules/Auth/Signin/Signin"));
const Signup = lazy(() => import("../modules/Auth/Signup/Signup"));
const MovieDetail = lazy(() => import("../modules/MovieDetail/MovieDetail"));
const Ticket = lazy(() => import("../modules/Sticket/Ticket"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // home
      { index: true, element: <Home /> },
      // chi tiết phim
      {
        path: "/chiTietPhim/:movieId",
        element: <MovieDetail />,
      },
      // trang đặt vé
      {
        path: "/datVe/:maLichChieu",
        element: (
          <RouterProtected>
            <Ticket />
          </RouterProtected>
        ),
      },
    ],
  },

  //Authentication
  {
    path: "/dangNhap",
    element: <AuthLayout />,
    children: [{ index: true, element: <Signin /> }],
  },

  {
    path: "/dangKy",
    element: <AuthLayout />,
    children: [{ index: true, element: <Signup /> }],
  },
]);

export default routes;
