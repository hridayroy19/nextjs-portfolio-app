import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contactpage = () => {
  return (
    <div className=" bg-black justify-center lg:py-32 md:py-14 py-14 px-1 md:px-10 lg:px-20 flex w-full mx-auto">
      <div className="flex flex-col lg:flex-row w-full mx-auto text-white min-h-screen p-6">
        {/* Form Section */}
        <div className="bg-[#1a091e] border  p-10 rounded-lg w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-purple-400">
            Lets work together!
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            quia excepturi corrupti repellendus. Aliquid!
          </p>
          <form className="mt-6 space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-1/2 p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-1/2 p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500 h-32"
            ></textarea>
            <button className="w-full p-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* text section */}
        <div className="flex flex-col items-start justify-center mt-8 lg:mt-0 lg:ml-16 w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <FaPhoneAlt className="text-green-500 text-2xl" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-400">+88 (012345 789)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-green-500 text-2xl" />
            <div>
              <h3 className="font-bold">Email Address</h3>
              <p className="text-gray-400">example@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-500 text-2xl" />
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
