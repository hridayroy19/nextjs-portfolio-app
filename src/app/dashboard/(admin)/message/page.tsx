interface Data {
  _id: string;
  name: string;
  fastname:string;
  message: string;
  email: string;
  phone: string;
}

interface MessageResponse {
  data: Data[];
}

const page = async () => {
  const res = await fetch("https://portfoli-server-three.vercel.app/api/message");
  const message: MessageResponse = await res.json();
  console.log(message);

  return (
    <div className="py-10">
      <div className="container w-[95%] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">My Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Message</th>
                <th className="border p-2 hidden sm:table-cell">Email</th>
                <th className="border p-2 hidden sm:table-cell">Phone</th>
              </tr>
            </thead>
            <tbody>
              {message.data.map((data) => (
                <tr key={data._id} className="text-center hover:bg-gray-100">
                  <td className="border w-[150px] p-2">{data.name}</td>
                  <td className="border p-2 max-h-[100px] overflow-y-auto">
                    {data.message}
                  </td>
                  <td className="border p-2  sm:table-cell">{data.email}</td>
                  <td className="text-blue-900 w-[150px] cursor-pointer hover:text-red-600 uppercase font-semibold  items-center gap-1 p-3  sm:table-cell">
                    {data.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
