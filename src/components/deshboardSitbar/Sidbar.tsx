"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCog, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-950 p-2 text-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-950 fixed top-0 left-0 h-full p-4  transition-transform duration-300 ease-in-out 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-48`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/createBlog"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <IoCreateOutline className="h-5 w-5" />
              <span>Create Blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/createProject"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <IoCreateOutline className="h-5 w-5" />
              <span>Creat Projcet</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaCog className="h-5 w-5" />
              <span>Blog Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaCog className="h-5 w-5" />
              <span>Project Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 mt-10 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaHome className="h-5  w-5" />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
