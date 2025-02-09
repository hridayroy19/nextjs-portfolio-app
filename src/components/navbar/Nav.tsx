import Image from "next/image";

import { navLinks } from "../../../constant/constant";
import Link from "next/link";

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
          {
            navLinks.map((navlink)=>{
                return (
                    <Link key={navlink.id} href={navlink.url} >
                        <p className="nav_link">{navlink.label}</p>
                    </Link>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
