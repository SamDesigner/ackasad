import React from "react";
import Logo from "../public/images/Logo.png";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className=" px-5 py-[50px] max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image
              className="h-[200px] w-[300px]"
              src={Logo}
              alt="Company Logo"
            />
          </div>
          <div className="text-primary font-sans flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

        </div>
        <div className="text-primary font-sans border-t mt-[30px] py-5 text-center">Copyright &copy; {currentYear} Ackasad, All rights reserved.</div>

        {/* <div>Copyright &copy; {currentYear} Ackasad, All rights reserved.</div> */}
      </div>
    </div>
  );
};

export default Footer;
