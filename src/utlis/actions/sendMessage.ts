"use server";

export const createMessage = async (data: FormData) => {
    const messageData = Object.fromEntries(data.entries());
    console.log(messageData , "message");

    const res = await fetch("https://portfoli-server-three.vercel.app/api/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
    });

    const message = await res.json();
    return message;
};
