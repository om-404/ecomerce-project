import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const AdminLogin = () => {
  return (
    <div>
        <div className="w-[60vw] lg:w-[25w] mx-auto my-10 grid gap-3">
                  <h1 className="text-2xl font-bold">Login into your account</h1>
                  <form action="" className="grid gap-3">
                    <Input placeholder="Enter Your Username" type="text" name="username"></Input>
                    <Input placeholder="Enter Your Password" type="password" name="password"></Input>
          
                    
                    <Button >Login</Button>
                    
                  </form>
                </div>
    </div>
  )
}

export default AdminLogin