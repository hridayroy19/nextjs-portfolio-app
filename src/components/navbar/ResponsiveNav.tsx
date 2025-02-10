"use client";
import { useState } from "react";
import MobilNav from "./MobilNav";
import Nav from "./Nav";

export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const ResponsiveNav = ({ session }: { session: UserProps | null }) => {
  // console.log(session);

  const [showNav, setShowNav] = useState(false);

  const showNavHandeler = () => setShowNav(true);
  const closeNavHandeler = () => setShowNav(false);

  return (
    <div>
      <Nav session={session} openNav={showNavHandeler} />
      <MobilNav showNav={showNav} closeNav={closeNavHandeler} />
    </div>
  );
};

export default ResponsiveNav;
