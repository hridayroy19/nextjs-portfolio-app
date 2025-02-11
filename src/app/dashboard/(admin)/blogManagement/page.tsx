"use client";

import { Blog } from "@/components/blogCart/Blog";
import { deleteBlog } from "@/utlis/actions/blogDelet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const BlogManagementPage = () => {
  const [blogList, setBlogList] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://portfoli-server-three.vercel.app/api/blog");
      const { data } = await res.json();
      setBlogList(data);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId: string) => {
    console.log(handleDelete);

    try {
      const result = await deleteBlog(blogId);
      console.log(result);

      if (result.success) {
        setBlogList(blogList.filter((blog: Blog) => blog._id !== blogId));
        alert("Blog deleted:");
      } else {
        console.error("Failed to delete the blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="py-10">
      <div className="container w-[95%]">
        <h2 className="text-2xl font-bold text-center mb-10">My Blog</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Photo</th>
                <th className="border p-2">Blog Name</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Delete</th>
                <th className="border p-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {blogList?.map((blog: Blog) => (
                <tr key={blog._id} className="text-center hover:bg-gray-100">
                  <td className="border w-[70px] h-[50px] p-2">
                    <Image
                      src={blog.blog_image}
                      alt="image"
                      width={200}
                      height={100}
                      className="rounded-full"
                    />
                  </td>
                  <td className="border p-2">
                    {blog.title.split(" ").slice(0, 3).join(" ")}...
                  </td>
                  <td className="border p-2">{blog.date}</td>
                  <td
                    onClick={() => handleDelete(blog._id)}
                    className="text-blue-900 cursor-pointer hover:text-red-600 uppercase font-semibold flex items-center gap-1 p-3"
                  >
                    <MdOutlineDelete /> Delete
                  </td>
                  <td className="border p-2">Update</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManagementPage;
