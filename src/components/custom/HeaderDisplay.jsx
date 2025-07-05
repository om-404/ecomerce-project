import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HeaderDisplay = () => {

    const ImgData = [
        "https://images.unsplash.com/photo-1629429407756-4a7703614972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1626155399627-86488538895d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    ]
  return (
    <div>
        <Carousel className="my-10 mx-auto w-[93vw] overflow-x-clip sm:overflow-visible ">
  <CarouselContent>

    
        {
            ImgData.map((image) => (
                <CarouselItem key={image} >
                    <img 
                    src={image}
                    loading="lazy"
                    className = "object-cover w-full h-[60vh] rounded-3xl"
                />
                </CarouselItem>
            ))
        }
    
     
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default HeaderDisplay