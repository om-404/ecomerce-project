import React, { useState } from 'react'
import { Input } from '../components/ui/input'
import { Checkbox } from '../components/ui/checkbox'
import { Button } from '../components/ui/button'
import {Link} from "react-router-dom"


const SignUp = () => {
  const [enabled, setEnabled] = useState(false); 
  return (
    <>
      <div className="w-[60vw] lg:w-[25w] mx-auto my-10 grid gap-3">
        <h1 className="text-2xl font-bold">Register your account</h1>
        <form action="" className="grid gap-3">
          <Input placeholder="Enter Your Name" type="text" name="name"></Input>
          <Input placeholder="Enter Your Email" type="email" name="email"></Input>
          <Input placeholder="Enter Your Phone" type="tel" name="phone"></Input>
          <Input placeholder="Enter Your Password" type="password" name="password"></Input>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" onCheckedChange = {(e) => setEnabled(e)} />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>
          </div>
          <Button disabled={!enabled}> Sign Up</Button>
          <div className="flex gap-1">
            <label htmlFor="terms">Already have an account?</label>
            <Link to={"/login"} >
              <label htmlFor="terms" className="cursor-pointer text-blue-500 hover:underline ">Login</label>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp