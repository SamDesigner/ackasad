import {
  FaLandmark,
  FaHandshake,
  FaProjectDiagram,
  FaMoneyBillWave,
} from "react-icons/fa";
import PalmTree from '@/public/images/palmTree.png'
import Image from 'next/image'
const africaInvestmentFeatures = [
  {
    id: 1,
    title: "State Project Financing",
    icon: FaLandmark,
    description:
      "Helping governments secure funding for major infrastructure and public projects.",
  },
  {
    id: 2,
    title: "Trusted Funding Partners",
    icon: FaHandshake,
    description:
      "Connecting clients with reputable local and international funding providers.",
  },
  {
    id: 3,
    title: "Turnkey Project Support",
    icon: FaProjectDiagram,
    description:
      "Assisting in project planning, execution, and completion for guaranteed success.",
  },
  {
    id: 4,
    title: "Capital Acquisition Guidance",
    icon: FaMoneyBillWave,
    description:
      "Ensuring smooth and efficient access to necessary investment capital.",
  },
];
const Projects = () => {
  return (
    <div className="charcoal_black  py-[150px] relative">
         <div className="absolute left-15 top-0 rotate-180 right-2 ">
          <Image className="h-[200px] w-[200px] " src={PalmTree} alt="Africa Picture" />
 
        </div>
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[40px] text-white">
            <span className="text-primary">Investment</span> Facilitation{" "}
            <br></br> in Africa
          </h2>
          <div className="flex items-center w-full">
            <p className="whitespace-nowrap font-mono font-medium text-gray-300">
              Explore services
            </p>
            <div className="flex-1 border-b border-gray-300 ml-3"></div>
          </div>
        </div>
        <div className="absolute left-15 bottom-0">
          <Image className="h-[100px] w-[100px] " src={PalmTree} alt="Africa Picture" />
 
        </div>
        <div className="grid grid-cols-4 divide-x ">
          {africaInvestmentFeatures.map((data) => (
            <div key={data.id} className="text-white flex flex-col items-start gap-2.5  justify-center p-4">
              <div>
                <data.icon className="text-primary text-[50px]" />
              </div>
              <h2 className="text-[18px]">{data.title}</h2>
              <p className="text-[16px] font-sans">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
