import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.jsx"

import {Input} from "../ui/input.jsx"




const categoryData = {
    trigger : "Category",
    items : ["Keyboard", "Mouse", "headset", "monitor"]
}
const priceData = {
    trigger : "Price",
    items : ["1000", "2000", "3000", "8000"]
}

const FilterMenu = () => {

    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [search, setSearch] = useState("")

  return (
    <div className="w-[93vw] flex flex-col sm:flex-row justify-between items-center ax-auto my-10 gap-3 sm:gap-0">

        {/* drop down filter */}
        <div className="flex sm:w-[30%] w-full gap-3">
            {/* for ctegory */}
            <Select onValueChange={(value) => setCategory(value)}>
  <SelectTrigger id={categoryData.trigger}>
    <SelectValue placeholder={categoryData.trigger} />
  </SelectTrigger>
  <SelectContent position="popper">
    
    {
        categoryData.items.map((item) => (
            <SelectItem value={item} className="capitalize">{item}</SelectItem>
        ))
    }
  </SelectContent>
            </Select>

            {/* for price */}

           <Select onValueChange={(value) => setPrice(value)}>
  <SelectTrigger id={priceData.trigger}>
  <SelectValue placeholder={priceData.trigger} />
  </SelectTrigger>
  <SelectContent position="popper">
    
    {
        priceData.items.map((item) => (
            <SelectItem value={item} className="capitalize">Less Than {item}</SelectItem>
        ))
    }
  </SelectContent>
           </Select>

        </div>

        {/* search input */}
        <div className="sm:w-[60%] w-full">
            <Input id="search" placeholder="Search Here..." onChange={(e) => setSearch(e.target.value)} />
        </div>

    </div>
  )
}

export default FilterMenu