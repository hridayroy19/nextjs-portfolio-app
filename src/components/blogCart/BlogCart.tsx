import Image from "next/image";
import React from "react";

type props = {
  blog: {
    _id: string;
    title: string;
    summary: string;
    date: string;
    blog_image: string;
  };
};
const BlogCart = ({ blog }: props) => {
  // console.log(blog,"single card");
  
  return (
    <div className=" bg-indigo-950 rounded-md overflow-hidden">
      <Image
        src={blog.blog_image}
        alt="images"
        width={250}
        height={250}
        className="w-full h-[250] object-cover "
      />
      <div className="p-6">
        <p className="rounded-sm px-6 py-1.5 bg-red-500 text-white w-fit">
          News
        </p>
        <h1 className=" sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 text-gray-200 leading-[1.6rem] font-bold ">
          {blog.title}
        </h1>
        <p className="text-gray-400 text-sm mt-2">{blog.summary}</p>
        <div className="w-full border mt-2"></div>
        <p className="text-white text-xs flex justify-between mt-2">
          {blog.date}
          <span className="font-medium hover:bg-gray-500 border p-1 cursor-pointer text-[15px]">
          Detailed
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCart;
