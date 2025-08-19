import { useSelector, useDispatch } from "react-redux";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function Navbar({ onMenuClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-emerald-700 dark:bg-emerald-600 text-white dark:text-gray-100 shadow-md">
        <ul className="flex justify-between items-center px-6 md:px-10 py-4 text-2xl">
          <li className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded hover:bg-emerald-800 dark:hover:bg-emerald-500 transition"
            >
              <Menu size={28} />
            </button>
            <span className="font-bold tracking-wide">LMS</span>
          </li>

          <li className="flex items-center gap-4">
            {isLoggedIn && currentUser ? (
              <>
                <span className="hidden md:inline text-sm">
                  {currentUser.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-white dark:bg-gray-100 text-emerald-700 dark:text-emerald-700 px-4 py-1 text-sm rounded shadow hover:bg-gray-100 dark:hover:bg-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white dark:bg-gray-100 text-emerald-700 dark:text-emerald-700 px-4 py-2 text-sm rounded shadow hover:bg-gray-100 dark:hover:bg-white transition"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
