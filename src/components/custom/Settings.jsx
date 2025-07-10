import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const Settings = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 w-screen sm:w-[80vw] sm:justify-start">

      {/* Change username */}

      <div>
        <h2 className="text-2xl font-bold mb-3">Change Username</h2>
        <form action="" className="grid gap-3 w-[80vw] sm:w-[30vw]">
          <Input 
          type="text" 
          placeholder="Enter previous username" name="previousUsername"
          />
          <Input 
          type="text" 
          placeholder="Enter new username" 
          name="newUsername"
          />

          <Button type="submit" >Change Username</Button>
        </form>
      </div>

      {/* change password */}

      <div>
        <h2 className="text-2xl font-bold mb-3">Change Password</h2>
        <form action="" className="grid gap-3 w-[80vw] sm:w-[30vw]">
          <Input 
          type="password" 
          placeholder="Enter previous password" name="previousUsername"
          />
          <Input 
          type="password" 
          placeholder="Enter new password" 
          name="newUsername"
          />

          <Button type="submit" >Change Password</Button>
        </form>
      </div>
    </div>
  )
}

export default Settings