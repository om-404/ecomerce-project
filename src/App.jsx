import Navbar from "./components/custom/Navbar.jsx";
import  Home  from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.js";
import Footer from "./components/custom/Footer.jsx";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Error from "./pages/Error.jsx";
import Success from "./pages/Success.jsx";
import RootLayouts from "./components/layouts/RootLayouts.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";

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
      element: 
      (
        <AdminLayout />
      )
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