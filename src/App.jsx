import  Home  from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.js";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Error from "./pages/Error.jsx";
import Success from "./pages/Success.jsx";
import RootLayouts from "./components/layouts/RootLayouts.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import CreateProduct from "./components/custom/CreateProduct.jsx";
import AllProducts from "./components/custom/AllProducts.jsx";
import Orders from "./components/custom/Orders.jsx";
import Analytics from "./components/custom/Analytics.jsx";
import Settings from "./components/custom/Settings.jsx";

export default function App() {

  const router1 = createBrowserRouter([
    {
      path: "/",
      element: 
      (
        // <RootLayouts ><Home /></RootLayouts>
        <RootLayouts children={<Home />} />
      )
    },

    {
      path: "/signup",
      element: 
      (
        <RootLayouts children={<SignUp />} />    
      )
    },

    {
      path: "/login",
      element: 
      (
        <RootLayouts children={<Login />} />
      )
    },

    {
      path: "/product",
      element: 
      (
        <RootLayouts children={<Product />} />
      )
    },

    {
      path: "/checkout",
      element: 
      (
        <RootLayouts children={<Checkout />} />
      )
    },

    {
      path: "/admin/login",
      element: 
      (
        <RootLayouts children={<AdminLogin />} />
      )
    },

    {
      path: "/admin/dashboard",
      element: <AdminLayout children={<CreateProduct/>}/>
    },

    {
      path: "/admin/dashboard/all-product",
      element: <AdminLayout children={<AllProducts/>}/>
    },

    {
      path: "/admin/dashboard/orders",
      element: <AdminLayout children={<Orders/>}/>
    },

    {
      path: "/admin/dashboard/analytics",
      element: <AdminLayout children={<Analytics/>}/>
    },

    {
      path: "/admin/dashboard/settings",
      element: <AdminLayout children={<Settings/>}/>
    },

    {
      path: "/*",
      element: 
      (
        <Error />
      )
    },

    {
      path: "/success",
      element: 
      (
        <Success />
      )
    },
  ]);

  return (
    <>
  
    
    <ThemeProvider>
        <RouterProvider router = {router1} />
    </ThemeProvider>

    </>
    
    
  )
}