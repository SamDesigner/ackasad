import Image from "next/image";
import SectionTitle from "./global/SectionTitle";
import Button from "./global/Button";
import turnKey from "../public/images/turnkeyProject.jpg";
import ServiceText from "./ServiceText";
const About = () => {
  return (
    <div className="bg-darkGradient pt-15">
      <div className="bg-gray-100 py-[100px] ounded-tr-[80px] rounded-tl-[80px]">
        <div className="gap-5 flex px-5 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col gap-[50px]">
            <SectionTitle title="Who we are" />
            <div className="flex flex-col gap-[30px]">
              <h2 className="text-[40px]">About Us</h2>
              <p className="font-sans text-justify">
                At Ackasad, we are a globally connected enterprise specializing
                in import and export operations across Turkey, South America,
                Africa, and Europe. Our business activities span a wide range of
                sectors, all driven by our commitment to fostering international
                partnerships and sustainable growth. In Africa, we play a
                pivotal role in facilitating the acquisition of investment funds
                for major state and private sector projects, working hand in
                hand with reputable global funding providers.
              </p>
              <Button text="Learn More" />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center">
                {/* Note Need to Add stat card on Image */}
              <Image
                className="w-[500px] h-[450px] object-cover rounded-3xl"
                src={turnKey}
                alt="Engineers at work"
              />
            </div>
          </div>
        </div>
        <ServiceText />
      </div>
    </div>
  );    
};

export default About;
