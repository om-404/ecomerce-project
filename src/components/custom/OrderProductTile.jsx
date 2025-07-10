import React from 'react'
import { Colors } from '../constants/colors'

			

const OrderProductTile = () => {
  return (
    <div className="flex jsutify-between items-start sm:items-center p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
        <div className="flex flex-row items-center gap-2">
            <img 
                src="https://images.pexels.com/photos/32890143/pexels-photo-32890143.jpeg" 
                className="w-20  sm:24 rounded-lg"
                alt="" 
            />
            <div className="grid sm:gap-1">
                <h1 className="font-semibold text-sm sm:text-base">Cosmic byte mouse</h1>
                <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-customGray text-xs sm:text-sm my-0">
                    <span className="font-semibold">
                        Color : {" "}
                        <span style={{backgroundColor:"#ffffff"}} >#ffffff</span>
                    </span>
                    <span className="hidden sm:block">|</span>
                    <span className="font-semibold">
                        Qty : {" "}
                        <span className="font-medium text-customYellow">2</span>
                    </span>
                    <span className="hidden sm:block">|</span>
                    <span className="font-semibold">
                        Price : {" "}
                        <span className="font-medium text-customYellow">₹ 249</span>
                    </span>
                    
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderProductTile