import React from "react";
// import Navbar from "./Navbar";
import Button from "./global/Button";
import Image from "next/image";
import Logo from "../public/images/Logo.png";
import SingleDark from "../public/images/LogoDarkSingle.png";
import { motion } from "framer-motion";
const Showcase = () => {
  return (
    <div className="gradient_bg h-screen relative pt-[15vh]">
      {/* <Navbar /> */}

      <div className="px-5 flex flex-col gap-5 z-200">
        <div className="flex flex-col  mt-10 ">
          <Image className="h-[120px] w-[120px] z-200" src={SingleDark} alt="logo" />
          <h1 className="text-[60px] font-bold z-200">Global Trade.<br></br> Local Impact.</h1>
          <p className="w-[500px] z-200">
            From trade to turnkey solutions, we connect regions and secure
            investment funding that drives real impact across continents.
          </p>
        </div>

        <Button type='primary' text="Learn more" />
      </div>
      {/* <div>
        <Image src='/svg/globe.svg' alt="Globe Image" height={200} width={200} />
      </div>*/}
      <motion.div
        className="absolute bottom-0 left-[50%] z-200"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration:2,
          repeat:Infinity,
          ease:"easeInOut"
        }}
      >
        <Image src="/images/jet.png" alt="Jet Image" height={100} width={100} />
      </motion.div>
      <div className="absolute bottom-0 right-0 z-200">
        <Image
          src="/images/dots.png"
          alt="Globe Image"
          height={200}
          width={200}
        />
      </div>
      <div className='absolute top-0 h-full w-full flex items-center justify-center opacity-30'>
        <Image src={Logo} className="h-[500px] w-[600px]" alt="Jet Image"  />

      </div>
    </div>
  );
};

export default Showcase;
