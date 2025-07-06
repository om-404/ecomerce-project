import React from 'react'
import { Colors } from '../constants/colors'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { starGenerator } from '../constants/helper'



const Review = () => {
  return (
    <div className="my-10 w-[93vw] lg:w-[70vw] mx-auto">
        <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center">Reviews</h3>

        {/* write review section */}
        <div className="rounded-lg">
            <h4 className="font-semibold text-lg text-gray-700 dark:text-customeIsabelline mb-4">Write a review</h4>
            <Textarea placeholder="Your Review" className="mb-4 " />
            <div className="flex gap-5">
                <Input type="number" max="5" min="1" className="mb-4 w-[10rem] " placeholder="Rating (1-5)" />
                <Button>Submit Review</Button>
            </div>
        </div>

        {/* review list */}

        <div className="space-y-6 my-10">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg dark:bg-zinc-900 dark:border-none">
                {/* reviewer info */}

                <div className="flex items-center mb-4">
                    <img src="https://via.placeholder.com/42" alt="" className="w-10 h-10 rounded-full  border border-gray-300 " />

                    <div>
                        <h4>Om sonawale</h4>
                        <div className="flex items-center mt-1">
                            {starGenerator(4, "0", 15, Colors.customYellow)}
                        </div>
                    </div>
                </div>

                {/* Review content */}

                <p className="text-gray-600 text-sm dark:text-customGray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.</p>

                {/* reply section */}

                <div className="mt-5 bg-gray-50 p-4 rounded-lg border dark:bg-zinc-800">
                    <h5 className="font bold text-sm text-gray-700 mb-3 dark:text-customYellow">Replies (3)</h5>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4 border-b pb-3 last:boder-none">
                            <img src="https://via.placeholder.com/32" alt="" className="w-8 h-8 rounded-full mr-4 border border-gray-300 " />
                            <div >
                                <h6 className="font-medium text-gray-800 text-sm dark:text-customIsabelline capitalize" >Vishal</h6>
                                <p className="text-gray-600 text-sm dark:text-customGray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* reply form */}

                <div className="mt-4">
                    <Textarea placeholder="Write your reply..."></Textarea>
                    <Button size="sm" className="mt-4">Reply</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review