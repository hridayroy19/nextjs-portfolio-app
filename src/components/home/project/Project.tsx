import Link from "next/link";
import { projectData } from "../../../../Data/data";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709fa]">
      <h1 className="text-center text-3xl text-white font-semibold">
        My Project
      </h1>
      <div className="w-[88%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <Link href={project.url} target="_blank">
              <div className="w-full h-[350px] relative">
                <Image
                  src={project.image}
                  alt="project image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
