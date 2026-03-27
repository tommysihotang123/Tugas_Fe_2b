import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import DaftarFilm from "../pages/Daftarsaya";
import AdminMovies from "../pages/AdminMovies";

const routers = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:"/Daftarsaya",
        element:<DaftarFilm />
      },
      {
        path:"/admin",
        element:<AdminMovies />
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routers = () => {
  return <RouterProvider router={routers} />;
};
export default Routers;
