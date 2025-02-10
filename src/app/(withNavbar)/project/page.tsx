import ProjcetCart from "@/components/projcetCart/ProjcetCart";


const page = () => {
  return (
    <div className="bg-[#141414] pt-28 pb-10">
      <h1 className="text-center text-white text-3xl mb-12">My Project</h1>
     <div className="grid grid-cols-1 w-[88%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
     <ProjcetCart/>
     <ProjcetCart/>
     <ProjcetCart/>
     <ProjcetCart/>
     <ProjcetCart/>
     </div>
    </div>
  );
};

export default page;
