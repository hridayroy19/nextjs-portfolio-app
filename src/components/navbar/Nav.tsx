import Image from "next/image";

import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className=" fixed h-[12vh] z-[10] bg-blue-900 w-full ">
      <div className=" flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto ">
        {/* logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className=" ml-[-1.5rem] sm:ml-0"
        />
        <div className=" flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className=" flex items-center space-x-4">
            <button className="">Hire Me </button>
            {/* mobil devic menu icon */}
            <HiBars3BottomLeft className=" w-8 h-8 cursor-pointer lg:hidden text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
