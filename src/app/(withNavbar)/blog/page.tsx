import { Blog } from "@/components/blogCart/Blog";
import BlogCart from "@/components/blogCart/BlogCart";

const Blogepage = async () => {
  const res = await fetch("https://portfoli-server-three.vercel.app/api/blog");
  const { data: blogs } = await res.json();

  return (
    <div className="h-auto  py-20 bg-[#141414] ">
      <div className="w-[88%] mx-auto mt-14 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
        {blogs.map((blog: Blog) => {
          return (
            <div key={blog._id}>
              <BlogCart blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogepage;
