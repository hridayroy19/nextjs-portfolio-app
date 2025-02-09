import Link from "next/link";
import { navLinks } from "../../../constant/constant";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobilNav = ({ showNav, closeNav }: Props) => {
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1000] w-full h-screen bg-black opacity-70 transition-opacity duration-500 ${
          showNav ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* Navigation Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-[80%] sm:w-[60%] bg-[#0f0715] text-white flex flex-col justify-center space-y-6 transform transition-transform duration-500 z-[1006] ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
            <p className="nav_link text-[28px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {navlink.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobilNav;
