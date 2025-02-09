import Sidebar from "@/components/deshboardSitbar/Sidbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard section",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen ">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-slate-100 rounded-xl ml-2">{children}</div>
      </div>
    </div>
  );
}
