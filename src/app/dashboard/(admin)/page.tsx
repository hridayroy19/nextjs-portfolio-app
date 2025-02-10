import { authOptions } from "@/utlis/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface Session {
  user?: User;
}
const page = async () => {
  const session: Session | null = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <div className="w-full mt-10 text-center mx-auto">
            <Image
              src={session?.user?.image || ""}
              alt="photo"
              width={200}
              height={250}
              className="rounded-full mx-auto"
            />
            <h1 className="text-2xl text-center mt-2 mb-2">
              Welcome {session?.user?.name}{" "}
            </h1>
            <h1 className="text-xl text-center ">{session?.user?.email}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
