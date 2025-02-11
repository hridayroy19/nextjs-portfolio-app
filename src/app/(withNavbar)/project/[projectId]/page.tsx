import { projectData } from "../../../../../Data/data";
import Image from "next/image";

const page = async ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;

  const project = projectData.find((b) => b.id === parseInt(projectId));

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className="py-32 bg-black text-white">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-6">
        {/* Image Section */}
        <div className="md:w-[50%] h-[500px]">
          <Image
            src={project.image}
            alt={`${project.title} image`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 mt-10">
          <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
          <p className="mb-10">{project.projectDetail}</p>
          <a
            href={project.url}
            target="_blank"
            className="text-white bg-blue-900 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            View Project
          </a>
          <div className="flex justify-start gap-5 mt-10">
            <a
              href={project.githubClient}
              target="_blank"
              className="text-white bg-blue-900 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300"
            >
              GitHub Client
            </a>
            <a
              href={project.githubServer}
              target="_blank"
              className="text-white bg-blue-900 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300"
            >
              GitHub Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
