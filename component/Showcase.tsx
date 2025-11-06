import React from "react";
import Navbar from "./Navbar";
import Button from "./global/Button";
import Image from "next/image";
import Logo from "../public/images/LogoDark.png";

const Showcase = () => {
  return (
    <div className="gradient_bg h-screen relative">
      <Navbar />

      <div className="px-5 flex flex-col gap-5">

        <div className="flex flex-col gap-2.5 mt-10 ">
          <Image className="h-[120px] w-[120px]" src={Logo} alt="logo" />
          <h1 className="text-[60px]">Global Trade. Local Impact.</h1>
          <p className="w-[500px]">
            From trade to turnkey solutions, we connect regions and secure
            investment funding that drives real impact across continents.
          </p>
        </div>

        <Button text="Learn more" />
      </div>
      {/* <div>
        <Image src='/svg/globe.svg' alt="Globe Image" height={200} width={200} />
      </div>
      <div>
        <Image src='/images/jet.png' alt="Globe Image" height={200} width={200} />
      </div> */}
      <div className="absolute bottom-0 right-0">
        <Image src='/images/dots.png' alt="Globe Image" height={200} width={200} />
      </div>
    </div>
  );
};

export default Showcase;
