import React from "react";
import Navbar from "./Navbar";

import TextButton from "./global/TextButton";
// import Cargo from "../public/images/cargo.png"
// import Logo from "../public/images/Logo.png";

import { motion } from "framer-motion";
const Showcase = () => {
  return (
    <div className="showcase_bg h-screen relative">
      <Navbar />
      <div className="px-5 flex flex-col gap-5 z-200">
        <div className="flex text-white flex-col gap-2.5">
          <h1 className="text-[60px] font-bold z-200">
            Global <span className="faint_gold">Trade.</span>
            <br></br> Local Impact.
          </h1>
        </div>
        <div className="bg-primary flex flex-col gap-5 absolute bottom-0 w-fit font-sans p-[30px] h-[35vh]">
          <p className="w-[400px] text-[18px] ">
            We drive global trade and investment, connecting markets across
            Turkey, South America, Africa, and Europe to deliver lasting impact.{" "}
          </p>
          {/* <p className="font-bold font-sans cursor-pointer">
              ⸺   Learn more 
          </p> */}
          <TextButton  />

        </div>
      </div>
    </div>
  );
};

export default Showcase;
