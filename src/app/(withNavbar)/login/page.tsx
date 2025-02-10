"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-[#0f0715] py-24 md:py-32 text-white lg:px-14 px-5">
      <div className="flex items-center justify-center">
        <div className="bg-[#240b39c0]  px-6 py-8 rounded-xl shadow-lg max-w-md w-full transition-transform transform hover:scale-105">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">Welcome Back!</h2>
            <p className="text-sm text-gray-600 mt-2">
              Please login to your account to continue.
            </p>
          </div>
          <form className="space-y-6">
            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 py-2 px-5 w-full rounded-md border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                className="mt-1 px-5 py-2 w-full rounded-md border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 mt-3">
              <label
                htmlFor="MarketingAccept"
                className="flex gap-4 items-center"
              >
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="rounded-md shadow-sm"
                />
                <span className="text-sm text-gray-600">
                  I want to receive emails about events, product updates, and
                  company announcements.
                </span>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <button className="w-full px-6 sm:w-auto inline-block rounded-md bg-[#240b39] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#f6f5f7] border border-[#240b39] focus:outline-none">
                Login
              </button>

              <p className="mt-4 sm:mt-0 text-sm text-gray-600">
                Dont have an account?{" "}
                <Link href="/reg" className="text-blue-500 underline">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6"></div>
          </form>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="w-full border flex py-2 px-4 justify-center items-center gap-2 rounded-full text-white bg-[#4285F4] hover:bg-blue-600 transition-all duration-200"
          >
            <FaGoogle className="text-[28px]" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
