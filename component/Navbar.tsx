interface NavProps {
   darkTheme?: boolean 
}
import Image from 'next/image'
import Link from 'next/link'
import Button from './global/Button'
import Logo from '@/public/images/Logo.png'
const Navbar = ({darkTheme = false}:NavProps) => {
  return (
// fixed bg-white 
    <div className={`flex w-full h-[85px] z-1000 justify-between items-center px-5 font-sans `}> 
        <div className='h-10 w-15 '>    
            <Image className='h-full' src={Logo} alt='Company Logo' />
        </div>
        <div className={`flex   justify-center items-center gap-10  ${darkTheme ? "text-black" : "text-white"}`}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
                <div>
            {/* <button  className='bg-black py-2 px-5 text-white '>Contact</button> */}
            <Button type='' text="Contact"/>
        </div>
        </div>
    
    </div>
  )
}

export default Navbar