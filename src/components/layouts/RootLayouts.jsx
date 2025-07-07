import React from 'react'
import Navbar from '../custom/Navbar'
import Footer from '../custom/Footer'

const RootLayouts = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />

    </div>
  )
}

export default RootLayouts