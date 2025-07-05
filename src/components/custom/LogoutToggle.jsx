import React from 'react'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx"

const LogoutToggle = () => {
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar className="cursor-pointer">
  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback className="text-xl">CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="center">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <Link to="/Myorders.jsx">
        <DropdownMenuItem>My Orders</DropdownMenuItem> 
    </Link>
    <DropdownMenuItem>Logout</DropdownMenuItem> 
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default LogoutToggle