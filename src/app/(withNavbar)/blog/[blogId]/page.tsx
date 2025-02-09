import Image from "next/image";

const BlogDetailspage = () => {
  const blog = {
    id: 1,
    title: "Top Web Development Trends to Watch in 2024",
    summary:
      "Explore the key web development trends for 2024 and their impact on your nds for 2024 and their impact on your businessbusiness.",
    date: "August 18, 2024",
    image: "/images/b1.jpg",
  };

  return (
    <div className="w-full bg-[#0f0715f3] text-white py-32 px-4">
      <div className="max-w-4xl mx-auto py-11 bg-white text-black shadow-lg rounded-lg p-6">
        <div className="mb-5 h-[350px] w-full rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            width={800}
            height={400}
            alt="blog image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          {blog.title}
        </h1>
        <p className="text-gray-500 text-sm text-center mb-4">{blog.date}</p>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          {blog.summary}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailspage;
