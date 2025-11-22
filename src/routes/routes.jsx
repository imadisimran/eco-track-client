import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyActivities from "../pages/MyActivities";
import PrivateRoute from "./PrivateRoute";
import Challenges from "../pages/Challenges";
import ForgotPassword from "../pages/ForgotPassword";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {index:true,element:<Home></Home>},
      {path:'my-activities',element:<PrivateRoute><MyActivities></MyActivities></PrivateRoute>},
      {path:'challenges',element:<Challenges></Challenges>}
    ]
  },
  {path:'/login',element:<Login></Login>},
  {path:'/register',element:<Register></Register>},
  {path:'/forgot-password', element:<ForgotPassword></ForgotPassword>},
  {path:'/*',element:<Error></Error>}
]);

export default router