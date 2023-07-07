import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// project imports
import Loadable from "../components/ui/Loadable/Lodable";
import Layout from "./layout";

// routing
const Home = Loadable(lazy(() => import("../pages/Home")));

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default MainRoutes;
