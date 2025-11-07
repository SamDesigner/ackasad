import Image from "next/image";
import Tower from "../public//images/tower.jpg";
import Button from "./global/Button";
const projectsData = [
  {
    id: 1,
    projectName: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime doloremque cupiditate unde fugiat consequatur cum ex earum laboriosam. Repellendus alias est corporis soluta, eos deserunt neque quod pariatur necessitatibus?",
    image: Tower,
  },
  {
    id: 2,
    projectName: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime doloremque cupiditate unde fugiat consequatur cum ex earum laboriosam. Repellendus alias est corporis soluta, eos deserunt neque quod pariatur necessitatibus?",
    image: Tower,
  },
];
const Projects = () => {
  return (
    <div className="bg-primary py-[100px]">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-10">
        <div className="flex flex-col gap-5  ">
          <div className="w-[500px]">
            <h1 className="font-kalnia text-[55px] font-bold">
              Projects We’ve Brought to Life
            </h1>
          </div>
          <div className=" flex justify-end">
            <p className="text-justify font-sans w-[500px]">
              From infrastructure and energy to industrial development, Ackasad
              has successfully executed turnkey projects across Africa, Europe,
              Turkey, and South America. Through our strong network of
              collaborators and funding partners, we transform ideas into
              sustainable achievements managing every phase from design to
              implementation with precision and excellence.
            </p>
          </div>
        </div>
        {/* Project Section Comes here */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-5">
            {projectsData.map((project) => (
              <div className="bg-white flex shadow-xl " key={project.id}>
                <div className="text-black flex-2 p-5 flex flex-col gap-2 ">
                  <h3 className="text-[30px]">{project.projectName}</h3>
                  <p className="text-justify font-sans">
                    {project.description}
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    className="h-[300px]"
                    src={project.image}
                    alt="Eiffel Tower"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 h-[350px] gap-5 ">
            <div className="flex-1 h-full grid grid-cols-3 gap-2.5 ">
              <Image
                className="h-full object-cover shadow-xl"
                src={Tower}
                alt="Project Image"
              />
              <Image
                className="h-full object-cover shadow-xl"
                src={Tower}
                alt="Project Image"
              />
              <Image
                className="h-full object-cover shadow-xl"
                src={Tower}
                alt="Project Image"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-10 p-5 bg-white shadow-xl">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[30px]">Eiffel Tower</h3>
                <p className="text-justify font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate maxime doloremque cupiditate unde fugiat consequatur
                  cum ex earum laboriosam. Repellendus alias est corporis
                  soluta, eos deserunt neque quod pariatur necessitatibus?
                </p>
              </div>
              <div className="flex justify-end">
              <Button text="View More Projects" type="primary" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
