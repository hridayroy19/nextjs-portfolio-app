import { blogs } from "../../../Data/data";
import BlogCart from "./BlogCart";

const Blog = () => {
  return (
    <div className=" pt-14 pb-16 bg-[#0f0715] ">
      <h2 className="text-center text-white text-3xl">Our BLog</h2>
      <div className="w-[88%] mx-auto mt-14 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              {" "}
              <BlogCart blog={blog} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
