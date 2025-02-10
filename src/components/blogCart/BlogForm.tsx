const BlogForm = () => {
    return (
      <div className=" px-4 py-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white/90 rounded-lg p-6 shadow-lg md:p-10">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
  
              {/* Email & Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>
  
                <div>
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone
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
                {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-center gap-2 cursor-pointer rounded-lg border border-gray-300 p-3 text-gray-700 hover:border-blue-500 transition focus:ring-2 focus:ring-blue-500"
                  >
                    <input
                      className="hidden"
                      type="radio"
                      name="option"
                      value={option}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
  
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                  id="message"
                  rows={4}
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogForm;
  