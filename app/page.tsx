// import Loader from "./loader";
"use client";
import { motion } from "framer-motion";
import Spinner from "./spinner";
import Image from "next/image";
import Logo from "../public/images/Logo.png";
export default function Home() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-bottom bg-cover min-h-screen flex flex-col items-center justify-center text-primary gap-[20px] ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={Logo}
          className="h-[200px] w-[300px] md:h-[300px] md:w-[400px]"
          alt="Akcasad Logo"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-[18px] text-center  capitalise">
          Site en cours de <br></br> construction
        </h1>
        <p className="mt-2">Merci de votre patience!</p>
        {/* <Loader /> */}
        <div className="relative mt-[5vh]">
          <Spinner />
        </div>
      </motion.div>
    </div>
  );
}
