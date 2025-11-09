import React from "react";
import SampleImage from "@/public/images/tower.jpg";
import Image from "next/image";
import grid from "@/public/images/darkGrid.png";
import AWS from "@/public/svg/AWS.svg";
import IFTTT from "@/public/svg/IFTTT.svg";
import plSense from "@/public/svg/pfSense.svg";
import Vyper from "@/public/svg/Vyper.svg";

const Testimonials = () => {
  const logos = [AWS, IFTTT, plSense, Vyper];

  return (
    <div className="obsession_bg py-[100px] relative overflow-hidden">
      <div className=" px-5 max-w-7xl mx-auto flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[40px]">Testimonials</h2>
          <div className="flex items-center w-full">
            <p className="whitespace-nowrap font-mono font-medium text-gray-900">
              Here from there
            </p>
            <div className="flex-1 border-b border-gray-600 ml-3"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-2">
          <Image src={grid} alt="grid" />
        </div>
        <div className="flex items-center z-500">
          <div className="flex-1">
            <Image
              className="h-[200px] w-[300px] object-cover rounded-md"
              src={SampleImage}
              alt="Sample Image"
            />
          </div>
          <div className="flex-2 flex flex-col gap-5">
            <h3 className="text-[14px] font-medium  font-mono ">
              Daniel Mkenzie
            </h3>
            <p className="text-[16px] font-normal font-sans text-justify">
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Hic eum modi dolores quasi ad optio consectetur omnis ullam veniam
              debitis. modi dolores quasi ad optio consectetur omnis ullam
              veniam debitis. modi dolores quasi ad optio consectetur omnis
              ullam veniam debitis. &quot;
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 flex-wrap">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
