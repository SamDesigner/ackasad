import React from 'react'
import Link from 'next/link'
interface PageProps {
    heading:string,
    subText:string,
    address:string
}
const PageTitle = ({heading, subText, address}:PageProps) => {
  return (
    <div className='flex flex-col gap-5 text-white'>
        <h1 className='text-[50px]'>{heading}</h1>
        <p className='w-[500px] font-sans '>
            {subText}
        </p>
        <div className='flex gap-2.5 font-mono text-white'>
            <Link href='/'>Home</Link> <span>/</span> 
            <p className='text-primary' >{address}</p>
        </div>
    </div>
  )
}

export default PageTitle