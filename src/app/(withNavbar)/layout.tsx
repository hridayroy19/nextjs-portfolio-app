import Footer from "@/components/footer/Footer";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ResponsiveNav />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
