import Learnmore from "./global/Learnmore";

import ServiceText from "./ServiceText";
const About = () => {
  return (
    // bg-goldBackground
    <div className=" pt-15 obsession_bg">
      <div className=" py-[100px]  ">
        <div className="gap-5 flex px-5 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col gap-[50px]">
         

            <div className="text-center">
              <h2 className="text-[12px] text-gray-600 font-bold font-mono">Who we are</h2>
              <h1 className="text-[40px]  ">
                Connecting Continents Through Trade and <br />
                Investment
              </h1>
            </div>
            <div className="about_bg rounded-xl h-screen p-[30px]">
              <div className="bg-primary  w-[400px] p-[30px] shadow-lg font-sans flex flex-col gap-5">
                <div className=" border-primary border-b-2 w-fit ">
                  <h2 className="text-[22px] font-600 font-mono ">About us</h2>
                </div>
                <p className="font-sans text-justify text-black  ">
                  At Ackasad, we are a globally connected enterprise
                  specializing in import and export operations across Turkey,
                  South America, Africa, and Europe. Our business activities
                  span a wide range of sectors, all driven by our commitment to
                  fostering international partnerships and sustainable growth.
                  {/* 
                  In Africa, we play a pivotal role in facilitating the
                  acquisition of investment funds for major state and private
                  sector projects, working hand in hand with reputable global
                  funding providers. */}
                </p>
                {/* <Button text="Learn More" /> */}
                    <Learnmore />
              </div>
            </div>
          </div>
        </div>
        <ServiceText />
      </div>
    </div>
  );
};

export default About;
