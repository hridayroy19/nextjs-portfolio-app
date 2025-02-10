import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you re looking for doesn t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-md text-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
