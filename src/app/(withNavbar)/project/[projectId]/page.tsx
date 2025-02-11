"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "../../../../../Data/data";

interface Project {
  id: number;
  title: string;
  image: string;
  url: string;
  projectDetail: string;
  githubClient: string;
  githubServer: string;
}

const Page = () => {
  const [project, setProject] = useState<Project | null>(null);
  console.log(project, "data");

  const [loading, setLoading] = useState<boolean>(true);
  const { projectId } = useParams() as { projectId?: number };
  console.log(projectId);

  useEffect(() => {
    if (!projectId) return;
    const foundProject = projectData.find((p) => p.id == projectId);
    console.log(foundProject, "idd");

    if (foundProject) {
      setProject(foundProject);
    } else {
      console.error("Project not found");
    }
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="text-center text-white py-32">
        <p>Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center text-white py-32">
        <p>Project not found</p>
      </div>
    );
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

export default Page;
