import Footer from "@/components/footer/Footer";
import ResponsiveNav, { UserProps } from "@/components/navbar/ResponsiveNav";
import { authOptions } from "@/utlis/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const layout =async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const session:UserProps | null = await getServerSession(authOptions)

  return (
    <div>
      <ResponsiveNav session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
