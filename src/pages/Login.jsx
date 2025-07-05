import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import {Link} from "react-router-dom"

const Login = () => {
  return (
      <>
        <div className="w-[60vw] lg:w-[25w] mx-auto my-10 grid gap-3">
          <h1 className="text-2xl font-bold">Login into your account</h1>
          <form action="" className="grid gap-3">
            <Input placeholder="Enter Your Email" type="email" name="email"></Input>
            <Input placeholder="Enter Your Password" type="password" name="password"></Input>
  
            
            <Button >Login</Button>
            <div className="flex gap-1">
              <label htmlFor="terms">Don't have an account?</label>
              <Link to={"/signup"} >
                <label htmlFor="terms" className="cursor-pointer text-blue-500 hover:underline ">Signup</label>
              </Link>
            </div>
          </form>
        </div>
      </>
    )
}

export default Login