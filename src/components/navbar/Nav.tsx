"use client";
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
//props type
type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200 `}
    >
      <div className=" flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto ">
        <h1 className="text-2xl  text-white ml-[-1.5rem] sm:ml-0">HR ID AY</h1>
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
           <Link href="/login"> <button className=" text-white border-2 px-2 text-sm ">
              LogIn
            </button></Link>
            {/* mobil devic menu icon */}
            <HiBars3BottomLeft
              onClick={openNav}
              className=" w-8 h-8 cursor-pointer lg:hidden  text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
