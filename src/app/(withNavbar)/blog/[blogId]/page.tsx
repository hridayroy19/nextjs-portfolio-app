import Image from "next/image";

const BlogDetailspage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  // console.log(blogId,"get id");

  const res = await fetch(`http://localhost:5000/api/blog/${blogId}`);
  const blogs = await res.json();
  console.log(blogs);

  return (
    <div className="w-full bg-[#0f0715f3] text-white py-32 px-4">
      <div className="max-w-4xl mx-auto py-11 bg-white text-black shadow-lg rounded-lg p-6">
        <div className="mb-5 h-[350px] w-full rounded-lg overflow-hidden">
          <Image
            src={blogs.blog_image}
            width={800}
            height={400}
            alt="blog image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          {blogs.title}
        </h1>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          {blogs.category}
        </h1>
        <p className="text-gray-500 text-sm text-center mb-4">{blogs.date}</p>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          {blogs.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailspage;
