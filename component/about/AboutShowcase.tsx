import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import topView from "@/public/images/topView.png";
import PageTitle from "../PageTitle";
const AboutShowcase = () => {
  return (
    <div className="charcoal_black  relative overflow-hidden ">
      <div className="gap-5  max-w-7xl mx-auto  h-[70vh] ">
        <Navbar   />
        {/* <Navbar darkTheme={true} /> */}

        <div className="flex  px-5 pt-[50px] h-full ">
          <PageTitle
            heading="About us"
            subText="We are a forward-thinking company dedicated to delivering innovative solutions that drive lasting success."
            address="About"
          />
        </div>
      </div>
      <div className="absolute right-[-10%] top-[20%] ">
        <Image
          className="h-[800px] w-[800px] object-cover"
          src={topView}
          alt="Cargo Ship"
        />
      </div>
    </div>
  );
};

export default AboutShowcase;
