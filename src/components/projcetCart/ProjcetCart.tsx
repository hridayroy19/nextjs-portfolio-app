import Image from "next/image";

const ProjcetCart = () => {
  return (
    <div className="max-w-sm mx-auto bg-[#0a0a0a] text-white rounded-xl border border-[#ffffff] p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <div className=" h-[270px] ">
          <Image
            src="/images/p1.png"
            alt="Project Thumbnail"
            width={200}
            height={250}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="mt-4 py-4">
        <div className="flex gap-2 mb-2">
          <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-full">
            Html
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
            Css
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-full">
            Javascript
          </span>
        </div>
        <h3 className="text-lg font-semibold">summar-sell5</h3>
        <p className="text-gray-400 text-sm">Jun 2023 - Jul 2023</p>
        <p className="text-gray-300 mt-2 text-sm">
          summar-sell5 is a web application designed to streamline task
          management and increase efficiency.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-950 text-white opacity-70 font-semibold rounded-lg hover:bg-[#00cca3] transition-colors duration-300">
          Details
        </button>
      </div>
    </div>
  );
};

export default ProjcetCart;
