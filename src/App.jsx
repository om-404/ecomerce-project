import Navbar from "./components/custom/Navbar.jsx";
import  Home  from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.js";

export default function App() {

  const router1 = createBrowserRouter([
    {
      path: "/",
      element: 
      (
        <>
        <Navbar />
        <Home />
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