"use client"
import { useState } from "react";
import MobilNav from "./MobilNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandeler = () => setShowNav(true);
  const closeNavHandeler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandeler} />
      <MobilNav showNav={showNav} closeNav={closeNavHandeler} />
    </div>
  );
};

export default ResponsiveNav;
