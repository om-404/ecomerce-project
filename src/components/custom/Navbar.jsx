import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ModeToggle} from './ModeToggle'
import CartDrawer from './CartDrawer'
import { User } from 'lucide-react'
import LogoutToggle from './LogoutToggle'

// import "./Navbar.css"

const Navbar = () => {

  const [isAuthenticate, setIsAuthenticate] = useState(true);

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b dark:bg-zinc-900">
       
            {/* icon */}
            <div className="flex gap-3 justify-center items-center">
              <ModeToggle />
              <CartDrawer />

              {isAuthenticate ? 
              (
                <LogoutToggle />
              )
              :
              (
                <Link to="/Login">
                  <User></User>
                </Link>
              )
              
            }
            </div>
            <Link  to={"/"} className='text-2xl font-bold'>
                Tech Becho
            </Link>
       

        <ul className="hidden sm:flex gap-2 text-xl">
            <Link to="/">About</Link>
            <Link to="/">Faqs</Link>
        </ul>
    </nav>
  )
}

export default Navbar