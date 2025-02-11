"use server";

export const deleteBlog = async (blogId: string) => {
  const res = await fetch(`http://localhost:5000/api/blog/${blogId}`, {
    method: "DELETE",
  });

  const deletedBlogInfo = await res.json();
  return deletedBlogInfo;
};
