import { Blog } from "@/components/blogCart/Blog";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";

const BlogManagementpage = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const { data: blogs } = await res.json();


  // const handleDelete = async () => {
  //   console.log(handleDelete);
    
  // };


  return (
    <div className=" py-10">
      <div className="container w-[95%]  ">
        <h2 className="text-2xl font-bold  text-center mb-10">My Bloge</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Photo</th>
                <th className="border p-2">Bloge Name</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Dleted</th>
                <th className="border p-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((bloges: Blog) => (
                <tr key={bloges._id} className="text-center hover:bg-gray-100">
                  <td className="border w-[70px] h-[50px] p-2">
                    <Image
                      src={bloges.blog_image}
                      alt="image"
                      width={200}
                      height={100}
                      className=" rounded-full"
                    />
                  </td>
                  <td className="border p-2">
                    {bloges.title.split(" ").slice(0, 3).join(" ")}...
                  </td>
                  <td className="border p-2">{bloges.date}</td>
                  <td  className=" text-blue-900 cursor-pointer hover:text-red-600 uppercase font-semibold flex items-center gap-1 p-3">
                   
                    <MdOutlineDelete /> delet
                  </td>
                  <td className="border p-2">update</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManagementpage;
