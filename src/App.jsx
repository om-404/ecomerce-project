import Navbar from "./components/custom/Navbar.jsx";
import  Home  from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.js";
import Footer from "./components/custom/Footer.jsx";

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
  ]);

  return (
    <>
  
    
    <ThemeProvider>
        <RouterProvider router = {router1} />
    </ThemeProvider>

    </>
    
    
  )
}