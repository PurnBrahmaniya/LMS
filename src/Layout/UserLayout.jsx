import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Layout below Navbar */}
      <div className="pt-16 grid grid-cols-12 min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden md:block col-span-2">
          <Sidebar isOpen={true} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-10 px-4 py-4">
          <Outlet />
          <Footer />
        </div>
      </div>

      {/* Mobile Sidebar Drawer - only show on small screens */}
      {sidebarOpen && (
        <div className="md:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default UserLayout;
