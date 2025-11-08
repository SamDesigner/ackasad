import React from "react";
import Image from "next/image";
import Container from "@/public/images/container.png";
import Truck from "@/public/images/truck.png";
import { GiCheckMark } from "react-icons/gi";
const importExportPoints = [
  "Global Trade Connectivity",
  "Efficient Customs Clearance",
  "Reliable Logistics Network",
  "Strategic International Partnerships",
  "Seamless Multimodal Transport",
  "Secure Cargo Handling",
  "Competitive Freight Rates",
  "End-to-End Supply Chain Support",
  "Timely Delivery Assurance",
  "Market Access Expansion",
  "Quality and Compliance Guaranteed",
];
const LogisticsService = () => {
  return (
    <div className="bg-primary ">
      <div className="py-[100px] relative px-5 max-w-7xl mx-auto flex flex-col gap-[50px] ">
        <div className="flex flex-col gap-5">
          <h2 className="text-[40px]">
            Goods <br></br> Import/Export
          </h2>
          <div className="flex items-center w-full">
            <p className="whitespace-nowrap font-mono font-medium text-gray-700">
              Explore services
            </p>
            <div className="flex-1 border-b border-gray-700 ml-3"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image
            className="h-[300px] w-[500px] object-cover"
            src={Container}
            alt="Container Image"
          />
        </div>
        <div className="flex ">
          <div className="flex-1">
            <div className="">
              <Image
                src={Truck}
                className="h-[500px] w-[500px] object-cover"
                alt="Cargoi Ship with goods"
              />
            </div>
          </div>
          <div className="flex-1">
            {/* <div className=" border-primary border-b-2 w-fit ">
              <h2 className="text-[22px] font-600 font-mono ">About us</h2>
            </div> */}
            <div className="grid grid-cols-2 gap-5">
              {importExportPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 h-[80px] bg-goldBackground font-mono gap-2 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 "
                >
                  <span className="text-gold-600 text-xl"><GiCheckMark /></span>
                  <p className="text-gray-700 font-medium text-[15px]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsService;
