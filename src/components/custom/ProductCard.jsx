import { Star } from 'lucide-react'
import LinkButton from './LinkButton.jsx'
import React from 'react'
// import "../../assets/shopping.png"

const ProductCard = ({
    name="Product Title", 
    price="2000", 
    rating="4", 
    image={
        url: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
        id: "skjghh83",
    },
}) => {
  return (
    <div className="w-[20rem] relative  overflow-clip grid z-1 hover:shadow-md rounded-2xl">
        <img src={image.url} alt={name} className="object-cover w-[30rem] h-[20rem]" />

        <div className="px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 translate-y-[3rem] hover:translate-y-0 transform transition-all ease-in-out rounded-xl duration-300 ">
            <h2>{name}</h2>

            <div className="flex justify-between " >
                <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <span>${price}</span>
            </div>
            <LinkButton to={``} text="View Product" />
        </div>
        
    </div>
    
  )
}

export default ProductCard