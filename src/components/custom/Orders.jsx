import React from 'react'
import { Card } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import OrderProductTile from './OrderProductTile'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination.jsx"

const Orders = () => {
  return (
    <>
      <h1 className="text-3xl fonr-bold mb-8 ">Orders</h1>
      <div className="flex flex-col gap-5 mx-auto ">
        
          <div className="space-y-8">
            <h2 className="text-xl font-medium">Order Summary</h2>
          
          <div className="grid space-y-1 gap-2 sm:w-[75vw]">
            <Card className="space-y-2 p-3 shadow-md">
              <div className="grid sm:grid-cols-3 gap-2">
                <OrderProductTile />
                <OrderProductTile />
                <OrderProductTile />
                
              </div>
              <hr />
              <div>
                <p className="flex justify-between gap-2 items-center px-3">
                  <span className="font-bold">Total:</span>
                  <span className="text-sm text-customGray">₹599</span>
                </p>
                <p className="flex justify-between gap-2 items-center px-3">
                  <span className="font-bold">Address:</span>
                  <span className="text-sm text-customGray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsa.</span>
                </p>
                <p className="flex justify-between gap-2 items-center px-3">
                  <span className="font-bold">Name:</span>
                  <span className="text-sm text-customGray">Om Sonawale</span>
                </p>
                <p className="flex justify-between gap-2 items-center px-3">
                  <span className="font-bold">Email:</span>
                  <span className="text-sm text-customGray">omSonawale@gmail.com</span>
                </p>
                <p className="flex justify-between gap-2 items-center px-3">
                  <span className="font-bold">Payment Id:</span>
                  <span className="text-sm text-customGray">SJDvh67754dcb</span>
                </p>

              </div>
              <Select>
                <SelectTrigger >
                  <SelectValue placeholder="pending"></SelectValue>
                </SelectTrigger>
                <SelectContent className="capitalize">
                  <SelectItem value="pending">pending</SelectItem>
                  <SelectItem value="packed">Packed</SelectItem>
                  <SelectItem value="in transit">In Transit</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          
          </div>
          </div>
          <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
    </>
  )
}

export default Orders