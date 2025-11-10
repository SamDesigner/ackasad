import Image from "next/image";
import turnKey from "@/public/images/turnkeyProject.jpg";
import cargoShip from "@/public/images/cargoShip.png";
import clipBoard from "@/public/images/clipboard.png";
import ServiceText from "../ServiceText";
const aboutData = [
  {
    id: 1,
    image: cargoShip,
    heading: "Import / Export",
    subText: ` We are an international import and export company connecting markets across Turkey, 
    outh America, Africa, and Europe, driving global trade and sustainable growth.`,
  },
  {
    id: 2,
    image: clipBoard,
    heading: "Turnkey Project",
    subText: `We specialize in delivering turnkey projects from concept to completion,
     handling every stage from design and planning to full implementation. `,
  },
];
const AboutUs = () => {
  return (
    <div className="obsession_bg py-[100px]">
      <div className="px-5 max-w-7xl mx-auto flex gap-[30px]">
        <div className="flex-1">
          <Image
            className="h-[500px] rounded-lg shadow-md object-cover"
            src={turnKey}
            alt="Engineers working"
          />
        </div>
        <div className="flex-2 flex flex-col gap-5 ">
          <h2 className="text-[30px]">About Us </h2>
          <p className="font-sans">
            We are a globally connected company bridging opportunities across
            Turkey, South America, Africa, and Europe through trade, investment,
            and project development. In Africa, we facilitate state project
            financing and manage turnkey solutions from design to full
            implementation leveraging our strong network of funding providers
            and experienced collaborators. Our commitment is simple: to deliver
            excellence and ensure the success of every project.
          </p>
          <div className="grid grid-cols-2 gap-[30px] mt-5">
            {aboutData.map((about) => (
              <div key={about.id} className="flex flex-col gap-2.5">
                <div>
                  <Image
                    className="h-20 w-20"
                    src={about.image}
                    alt="Cargo Ship"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-mono font-medium">{about.heading}</h3>
                    <p className=" text-[14px] text-justify font-sans">
                        { about.subText }
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
      <ServiceText />

      </div>

    </div>
  );
};

export default AboutUs;
