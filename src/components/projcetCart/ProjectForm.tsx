const ProjectForm = () => {
  return (
    <div className=" px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-gray-300 rounded-lg p-6 shadow-lg md:p-10">
          <form className="space-y-6">
            {/* Name Input */}
            <div className="flex gap-5 w-full mx-auto">
              <div className="w-full">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Project Name
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Technology
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
            </div>

            {/* Date & Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="Date" className="text-gray-700 font-medium">
                  Date
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Date"
                  type="Date"
                  id="Date"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Projcet Banner
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            {/* Radio Options */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Github Link Clint
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  type="tel"
                  id="phone"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Github Link Server
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  type="tel"
                  id="phone"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Projcet Live Url
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="text-gray-700 font-medium">
                Project Description
              </label>
              <textarea
                className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                id="message"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4 ">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
              >
                Create project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
