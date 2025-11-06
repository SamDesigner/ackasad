import React from 'react'
import Link from 'next/link'
import Button from './global/Button'
const Navbar = () => {
  return (

    <div className='flex justify-between items-center px-5 py-3 font-sans'> 
        <div>
            Logo
        </div>
        <div className='flex   justify-center items-center gap-10'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
                <div>
            {/* <button  className='bg-black py-2 px-5 text-white '>Contact</button> */}
            <Button type='primary' text="Contact"/>
        </div>
        </div>
    
    </div>
  )
}

export default Navbar