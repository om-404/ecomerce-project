import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

const CartDrawer = () => {
  return (
    
    <Drawer>
  <DrawerTrigger>
    <ShoppingCart className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer" strokeWidth={1.3} size={28}></ShoppingCart>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default CartDrawer
