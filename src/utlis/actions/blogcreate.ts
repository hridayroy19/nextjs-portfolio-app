"use server";

export const createBlog = async (data: FormData) => {
    const blogData = Object.fromEntries(data.entries());
    // console.log(blogData);

    const res = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    });

    const blogInfo = await res.json();
    return blogInfo;
};


