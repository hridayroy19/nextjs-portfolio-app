import BlogCart from "./BlogCart";

export type Blog = {
  _id: string;
  title: string;
  summary: string;
  date: string;
  blog_image: string;
};

const Blog = async () => {
  const res = await fetch("https://portfoli-server-three.vercel.app/api/blog");
  const { data: blogs } = await res.json();


  return (
    <div className=" pt-14 pb-16 bg-[#0f0715] ">
      <h2 className="text-center text-white text-3xl">Our BLog</h2>
      <div className="w-[88%] mx-auto mt-14 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
        {blogs.slice(0, 3).map((blog: Blog) => {
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

export default Blog;
