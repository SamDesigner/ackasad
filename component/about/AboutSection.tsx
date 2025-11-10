import React from "react";
import CargoContainer from "@/public/images/cargoContainer.png";
import Image from "next/image";
import Jet from "@/public/images//jet.png";
const AboutSection = () => {
  return (
    <div className="bg-primary">
      <div className="py-[100px] px-5 max-w-7xl mx-auto flex gap-10">
        <div className="flex-1 flex flex-col gap-5 relative">
          <h2 className="text-[30px] font-medium">Track your shipment.</h2>
          <p className="text-gray-800 font-sans text-justify">
            Through a unique combination of engineering, construction and design
            disciplines and expertise, Thanks to our advanced technological
            infrastructure and expert staff, such as supply.
          </p>
          <div className="absolute left-0 bottom-[30%]">
            <Image src={Jet} className="h-[75px] w-[75px]" alt="Jet Icon" />
          </div>
        </div>
        <div className="flex-2 flex justify-center">
          <Image
            className="h-[500px] w-[600px]"
            src={CargoContainer}
            alt="Cargo Ship"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
