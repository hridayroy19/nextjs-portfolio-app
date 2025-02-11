// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Blog {
//   _id: string;
//   title: string;
//   category: string;
//   date: string;
//   blog_image: string;
//   content: string;
// }

// const BlogDetailspage =  () => {
//   const [blogs, setBlogs] = useState<Blog | null>(null);
//   const { blogId } = useParams();

//   useEffect(() => {
//     if (!blogId) return;

//     fetch(`https://portfoli-server-three.vercel.app/api/blogs/${blogId}`)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error("Blog not found");
//             }
//             return res.json();
//         })
//         .then((data) => {
//             setBlogs(data.data);
//         })
//         .catch((err) => {
//             console.log(err);

//         });
// }, [blogId]);

//   // const {blogId}  = await params;
//   // console.log(blogId,"get id");

//   // const res = await fetch(`https://portfoli-server-three.vercel.app/api/blog/${blogId}`);
//   // const blogs = await res.json();
//   // console.log(blogs);

//   return (
//     <div className="w-full bg-[#0f0715f3] text-white py-32 px-4">
//       <div className="max-w-4xl mx-auto py-11 bg-white text-black shadow-lg rounded-lg p-6">
//         <div className="mb-5 h-[350px] w-full rounded-lg overflow-hidden">
//           <Image
//             src={blogs.blog_image}
//             width={800}
//             height={400}
//             alt="blog image"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
//           {blogs.title}
//         </h1>
//         <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
//           {blogs.category}
//         </h1>
//         <p className="text-gray-500 text-sm text-center mb-4">{blogs.date}</p>
//         <p className="text-gray-700 text-lg leading-relaxed text-justify">
//           {blogs.content}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetailspage;
"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  category: string;
  date: string;
  blog_image: string;
  content: string;
}

const BlogDetailspage = () => {
  const [blogs, setBlogs] = useState<Blog | null>(null);
  console.log(blogs, "data");

  const [loading, setLoading] = useState<boolean>(true);
  const { blogId } = useParams();
  console.log(blogId);

  useEffect(() => {
    if (!blogId) return;

    fetch(`https://portfoli-server-three.vercel.app/api/blog/${blogId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Blog not found");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return (
      <div className="text-center text-white py-32">
        <p>Loading...</p>
      </div>
    );
  }

  if (!blogs) {
    return (
      <div className="text-center text-white py-32">
        <p>Blog not found</p>
      </div>
    );
  }

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
