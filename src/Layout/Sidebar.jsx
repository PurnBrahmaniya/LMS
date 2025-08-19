import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useSelector } from "react-redux";

function Sidebar({ isOpen, onClose }) {
  const sidebarLinks = [
    { name: "Home", path: "/", roles: ["admin", "manager", "employee"] },
    { name: "Dashboard", path: "/dashboard", roles: ["admin", "manager"] },
    { name: "Request", path: "/request", roles: ["employee", "manager"] },
    { name: "Approval", path: "/approval", roles: ["manager", "admin"] },
    { name: "Admin", path: "/admin", roles: ["admin"] },
  ];

  const { currentUser } = useSelector((state) => state.auth);

  const visibleLinks = sidebarLinks.filter((link) =>
    link.roles.includes(currentUser?.role)
  );

  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`fixed top-18 mt-1 left-0 h-full min-w-60 w-4/12 bg-gray-100 dark:bg-gray-800 shadow-md transform transition-transform duration-300 md:hidden z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <X size={24} />
        </button>
        <ul className="mt-12 ml-5 space-y-4">
          {visibleLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block h-full bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 pt-4">
        <ul className="ml-5 space-y-4">
          {visibleLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block px-3 py-2 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 transition-colors rounded-tl-md rounded-bl-md"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
