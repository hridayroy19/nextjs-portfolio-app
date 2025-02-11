"use server";

export const deleteBlog = async (blogId: string) => {
  const res = await fetch(`https://portfoli-server-three.vercel.app/api/blog/${blogId}`, {
    method: "DELETE",
  });

  const deletedBlogInfo = await res.json();
  return deletedBlogInfo;
};
