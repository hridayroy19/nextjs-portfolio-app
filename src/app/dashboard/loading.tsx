import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center text-3xl ">
        <Image
          src="https://i.ibb.co.com/1GCzvxdX/download-1-removebg-preview.png"
          alt="loading"
          width={400}
          height={400}
          className="bg-cover"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
