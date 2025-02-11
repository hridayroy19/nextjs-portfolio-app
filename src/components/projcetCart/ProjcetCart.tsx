import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  image: string;
  url: string;
  projectDetail: string;
  githubClient: string;
  githubServer: string;
};

type projcetpros = {
  project: Project;
};

const ProjcetCart = ({ project }: projcetpros) => {
  return (
    <div className="max-w-sm mx-auto bg-[#0a0a0a] text-white rounded-xl border border-[#ffffff] p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <div className=" h-[270px] ">
          <Image
            src={project.image}
            alt="Project Thumbnail"
            width={200}
            height={250}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="mt-4 py-4">
        <div className="flex gap-2 mb-2">
          <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-full">
            Html
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
            Css
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-full">
            Javascript
          </span>
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-400 text-sm">Duration: 1 Month </p>
        <p className="text-gray-300 mt-2 text-sm">
          {project.projectDetail.split(" ").slice(0, 10).join(" ")}...
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-950 text-white opacity-70 font-semibold rounded-lg hover:bg-[#00cca3] transition-colors duration-300">
          <Link href={`/project/${project.id}`}> Details </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjcetCart;
