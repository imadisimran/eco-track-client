import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {index:true,element:<Home></Home>},
    ]
  },
  {path:'/login',element:<Login></Login>},
  {path:'/register',element:<Register></Register>},
]);

export default router