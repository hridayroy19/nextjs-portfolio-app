import { createBlog } from "@/utlis/actions/blogcreate";
import Form from "next/form";

const BlogForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen my-5">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <Form action={createBlog}>
          <h2 className="text-2xl font-semibold mb-6 text-blue-900 text-center">
            Create Blog
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>
            {/* Author Name */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>
            {/* Publish Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Publish Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Blog Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="blog_image"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Image URL
            </label>
            <input
              type="url"
              id="blog_image"
              name="blog_image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog content"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </Form>
      </div>
    </div>
  );
};

export default BlogForm;
