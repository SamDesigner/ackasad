// import Truck from "../publick"
import Truck from "../public/images/truck.png";
import handshake from "../public/images/handshake.png";
import Helmet from "../public/images/Helmet.png";
import Image from "next/image";
const services = [
  {
    id: 1,
    title: "Global Import-Export Solutions",
    description:
      "Facilitating seamless trade across Turkey, South America, Africa, and Europe with tailored logistics and compliance services.",
    image: Truck,
  },
  {
    id: 2,
    title: "Project Funding Acquisition",
    description:
      "Connecting clients with reputable global funding providers to secure investment for major state and private sector projects in Africa.",
    image: handshake,
  },
  {
    id: 3,
    title: "Turnkey Project Development",
    description:
      "Managing end-to-end project delivery from design to implementation, ensuring quality and efficiency in every phase.",
    image: Helmet,
  },
];

const ServiceText = () => {
  return (
    <div className="pt-[100px] px-5 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2.5">
        <h2 className="text-[40px]">Delivering Excellence Beyond Borders</h2>
        <p className="w-[500px] font-sans text-justify text-gray-500">
          Ackasad combines global expertise with local insight to drive seamless
          import-export operations, secure project funding, and manage turnkey
          developments that guarantee results.
        </p>
      </div>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="mt-10 flex flex-col gap-5 border border-gray-300 "
          >
            <div>
              <h3 className="text-[30px] ">{service.title}</h3>
              <p className="font-sans text-gray-500">{service.description}</p>
            </div>
            <div>
              <Image className="" src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceText;
