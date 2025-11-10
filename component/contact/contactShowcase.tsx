import React from "react";
import Navbar from "@/component/Navbar";
import contactPhone from "@/public/images/telephone.jpg";
import PageTitle from "@/component/PageTitle";
import Image from "next/image";
const contactShowcase = () => {
  return (
    <div className="charcoal_black overflow-hidden ">
      <div className="gap-5  max-w-7xl mx-auto  h-[70vh] relative ">
        <div className="absolute right-[0%] bottom-0 ">
          <Image
            className="object-cover h-[300px] w-[500px]"
            src={contactPhone}
            alt="Phone Picture"
          />
        </div>
        <Navbar />
        <div className="flex  px-5 pt-[50px] h-full ">
          <PageTitle
            heading="Contact Us"
            subText="We are a forward-thinking company dedicated to delivering innovative solutions that drive lasting success."
            address="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default contactShowcase;
