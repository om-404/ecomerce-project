import React, { useState } from 'react';
import {Input} from "../components/ui/input.jsx"
import {Button} from "../components/ui/button.jsx"

import { starGenerator } from '../components/constants/helper';
import { Circle, Minus, Plus } from 'lucide-react';
import { Colors } from '../components/constants/colors';

    const imagesArray = [ 
    {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748933687/Croma%20Assets/Computers%20Peripherals/Monitor/Images/245862_0_jqqzsg.png?tr=w-640",
        id: 1,

    },
    {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748933699/Croma%20Assets/Computers%20Peripherals/Monitor/Images/245862_8_ig2i5y.png?tr=w-360",
        id: 2,

    },
    {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748933702/Croma%20Assets/Computers%20Peripherals/Monitor/Images/245862_9_qwymgl.png?tr=w-360",
        id: 3,

    },
    {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1748933690/Croma%20Assets/Computers%20Peripherals/Monitor/Images/245862_2_qyuwey.jpg?tr=w-360",
        id: 4,

    },
]


const productStock = 10;


 
const Product = () => {

const [productQuantity, setProductQuantity ] = useState(1)
const [pincode, setPincode ] = useState(1)
const [avaibilityMessage, setAvaibilityMessage] = useState("")
const [pusrchaseProduct, setPusrchaseProduct] = useState(false)
const [address, setAddress] = useState("")

  return (
    <>
    <div>

        <main className="w-[93vw]   flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">

            {/* left side */}
            <div className="grid sm:w-[50%]  gap-3 pl-[10px] pt-[10px]">
                <img 
                src={imagesArray[0].url} 
                
                className="w-full lg:h-[25em] rounded-xl object-center object-contain border dark:border-none " />

                <div className="grid grid-cols-4 gap-3">
                {imagesArray.map(({url, id}) => (
                    <img
                    src={url}
                    key={id}
                    className="rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-300 border dark:border-none object-contain"
                     />
                ))}
            </div>
            </div>
            

            {/* right side */}

            <div className="sm:w-[50%] lg:w-[30%]">
                <div className="pb-5">
                    <h2 className="font-extrabold text-2xl">My first monitor</h2>
                    <p className="text-sm my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident at nisi explicabo nam beatae temporibus ratione fugiat! Tempora, perferendis iste?</p>
                    <div className="flex items-center">
                        {
                            starGenerator(4.5, "0", 15)
                        }
                        <span className="text-md ml-1">(2)</span>
                    </div>
                    

                    
                </div>

                <div className="py-5 border-t border-b">
                        <h3 className="font-bold text-xl">Rs.569 or Rs.34/month</h3>
                        <p className="text-sm">Suggested payements with 6 month special financing</p>
                    </div>

                <div className="py-5 border-b">
                        <h3 className="font-bold text-lg">Choose Color</h3>
                        <div className="flex items-center my-2">
                            <Circle 
                            fill={Colors.customIsabelline}
                            strokeOpacity={0.2}
                            strokeWidth={0.2}
                            size={40}
                            />
                            <Circle 
                            fill={Colors.customGray}
                            strokeOpacity={0.2}
                            strokeWidth={0.2}
                            size={40}
                            />
                        </div>
                    </div>

                <div className="py-5">
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center gap-5 bg-gray-100 rounded-full px-3 h-10 w-fit">
                            <Minus stroke={Colors.customGray} className="cursor-pointer"
                            onClick={() => setProductQuantity((qty)=>(qty>1 ? qty-1 : 1)) }/>
                            <span className="text-slate-950 select-none">{productQuantity}</span>
                            <Plus stroke={Colors.customGray} className="cursor-pointer"
                            onClick={()=> setProductQuantity((qty)=>(qty<productStock ? qty+1 : productStock)) } />
                        </div>
                        {productStock - productQuantity > 0 && (
                            <div className="select-none grid text-sm front=semibold text-gray-600">
                                <span>Only{" "}<span className="text-customYellow">{productStock - productQuantity} items {" "}</span>left!</span>
                                <span>Don't miss it </span>
                            </div>
                        )}
                    </div>

                    <div className="grid gap-3 my-5">
                        <div className="flex gap-3">
                            <Input placeholder="Enter Your Pincode Here" onChange={(e)=> setPincode(e.target.value)} />
                            <Button>Check Avaibility</Button>
                        </div>
                        <p className="text-sm px-2">{avaibilityMessage}</p>
                    </div>

                    <div className="flex gap-3">
                        <Button onClick={() => setPusrchaseProduct(true)} >Buy Now</Button>
                        <Button>Add to cart</Button>
                    </div>
                    {
                        pusrchaseProduct && 
                        <div className="my-2 space-y-2">
                            <Input placeholder="Enter Your Address Here " onChange={(e) => setAddress(e.target.value)} />
                            <Button>Confim order</Button>
                        </div>
                    }
                </div>
            </div>
            

        </main>

        {/* seview section */}

    </div>
    </>
  )
}

export default Product