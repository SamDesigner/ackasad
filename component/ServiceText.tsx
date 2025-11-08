// import Truck from "../publick"
import Truck from "../public/images/truck.png";
import handshake from "../public/images/handshake.png";
import Helmet from "../public/images/Helmet.png";
import Image from "next/image";
import SampleImg from "../public/images/showcase.jpg";
import Link from "next/link";
import Learnmore from "./global/Learnmore";
const services = [
  {
    id: 1,
    title: "Global Import-Export Solutions",
    description:
      "Facilitating seamless trade across Turkey, South America, Africa, and Europe with tailored logistics and compliance services.",
    image: SampleImg,
  },
  {
    id: 2,
    title: "Project Funding Acquisition",
    description:
      "Connecting clients with reputable global funding providers to secure investment for major state and private sector projects in Africa.",
    image: SampleImg,
  },
  {
    id: 3,
    title: "Turnkey Project Development",
    description:
      "Managing end-to-end project delivery from design to implementation, ensuring quality and efficiency in every phase.",
    image: SampleImg,
  },
];

const ServiceText = () => {
  return (
    <div className="pt-[100px] px-5 max-w-7xl mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="text-[40px]">
          Turnkey <br></br> Projects
        </h2>
        <div className="flex items-center w-full">
          <p className="whitespace-nowrap font-mono font-medium text-gray-700">
            Explore services
          </p>
          <div className="flex-1 border-b border-gray-300 ml-3"></div>
        </div>

        {/* <p className="w-[500px] font-sans text-justify text-gray-500">
          Ackasad combines global expertise with local insight to drive seamless
          import-export operations, secure project funding, and manage turnkey
          developments that guarantee results.
        </p> */}
      </div>
      <div className="grid grid-cols-3  divide-x divide-gray-300">
        {services.map((service) => (
          <div key={service.id} className="mt-10 flex flex-col transform transition-transform duration-300 hover:-translate-y-3    ">
            <div className="p-4">
              <Image
                className="h-[250px] object-cover rounded-lg"
                src={service.image}
                alt={service.title}
              />
            </div>
            <div className="p-4 flex flex-col gap-4 ">
              <h3 className="text-[20px] font-600 font-sans ">{service.title}</h3>
              <p className="font-sans text-gray-500">{service.description}</p>
              <div className="flex justify-end">
                <Learnmore />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceText;
