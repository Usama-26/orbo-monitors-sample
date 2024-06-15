import { useEffect, useState } from "react";
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

import MobileSidebar from "@/components/Mobile/Sidebar";
import DesktopSidebar from "@/components/Desktop/Sidebar";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Image from "next/image";

let sidebarNavigation = [
  {
    name: "Pump Fun",
    href: "dashboard",
    icon: "pill",
    current: true,
  },
  { name: "Pending Snipes", href: "products", icon: "goal", current: false },
  { name: "Raydium", href: "invoices", icon: "moon-phase", current: false },
  { name: "LMNFT", href: "invoices", icon: "frame", current: false },
];

const userNavigation = [
  { name: "Your profile", href: "/app/profile" },
  { name: "Sign out", href: "/" },
];

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState(sidebarNavigation);
  const router = useRouter();

  useEffect(() => {
    const updatedNavigation = navigation.map((navItem) => ({
      ...navItem,
      current: router.pathname.includes(navItem.href),
    }));
    setNavigation(updatedNavigation);
  }, [router]);

  console.log(navigation.filter((item) => router.pathname.includes(item.href)));

  return (
    <>
      <div className="bg-dark">
        <MobileSidebar
          navigation={navigation}
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        {/* Static sidebar for desktop */}
        <DesktopSidebar navigation={navigation} />

        <div className="lg:pl-72">
          <Header
            userNavigation={userNavigation}
            setSidebarOpen={setSidebarOpen}
          />

          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
