import Navbar from "./components/custom/Navbar.jsx";
import  Home  from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.js";
import Footer from "./components/custom/Footer.jsx";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";

export default function App() {

  const router1 = createBrowserRouter([
    {
      path: "/",
      element: 
      (
        <>
        <Navbar />
        <Home />
        <Footer />
        </>
      )
    },

    {
      path: "/signup",
      element: 
      (
        <>
        <Navbar />
        <SignUp />
        <Footer />
        </>
      )
    },

    {
      path: "/login",
      element: 
      (
        <>
        <Navbar />
        <Login />
        <Footer />
        </>
      )
    },

    {
      path: "/product",
      element: 
      (
        <>
        <Navbar />
        <Product />
        <Footer />
        </>
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