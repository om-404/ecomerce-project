import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { SelectValue, Select, SelectTrigger, SelectContent, SelectItem } from '../ui/select'
import { CardHeader, Card, CardContent, CardFooter } from '../ui/card'
import { Edit } from 'lucide-react'
import { Button } from '../ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.jsx"
import { Textarea } from '../ui/textarea'

const AllProducts = () => {
  return (
    <div className="mx-auto px-4 sm:px-8 -z-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="mb-8">
        <form action="" className="flex gap-4 items-end sm:w-[70vw]">
          <div className="flex-1">
            <label htmlFor="search" 
            className="block text-sm font-medium  mb-1"
            >
              Search Products
            </label>
            <div className="relative">
              <Input type="text" id="search" placeholder="search by name or description" className="pl-10" />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></Search>
            </div>
          </div>

          <div className="w-48">
            <label htmlFor="category"
            className="block text-sm font-medium mb-1"
            >Category</label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="headset">Head set</SelectItem>
                <SelectItem value="keyboard">Keyboard</SelectItem>
                <SelectItem value="mouse">Mouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 sm:mx-0">
        <Card className="flex flex-col">
          {/* <CardHeader className="p-0"> */}
            <div>
              <img src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg" alt="" 
              className="rounded-t-lg"
              />
            </div>
          {/* </CardHeader> */}

          <CardContent className=" flex-grow p-4">
            <h2 className="text-lg font-semibold mb-2">Ant Esport Keyboard</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempore.</p>
            <p className="text-lg font-bold">₹549.00</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline">
              <Edit className="mr-2 h-4 s-4" />Edit
            </Button>
            <Button> Blacklist Product</Button>
          </CardFooter>
        </Card>
      </div>


      <Dialog open={false}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            {/* <DialogDescription>
              Are you sure ?
            </DialogDescription> */}
          </DialogHeader>

          <form>
            <div className="grid gap-4 py-4">
              <div className="grid gap-4 items-center">
                <label htmlFor="name" type="text">Name</label>
                <Input id="name" name="name" ></Input>
              </div>
              <div className="grid gap-4 items-center">
                <label htmlFor="description" type="text">Description</label>
                <Textarea id="description" name="description" ></Textarea>
              </div>
              <div className="grid gap-4 items-center">
                <label htmlFor="price" type="number">Price</label>
                <Input id="price" name="price" ></Input>
              </div>
              <div className="grid gap-4 items-center">
                <label htmlFor="category" type="number">Category</label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Category"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="headset">Head Set</SelectItem>
                    <SelectItem value="keyboard">Keyboard</SelectItem>
                    <SelectItem value="mouse">Mouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default AllProducts