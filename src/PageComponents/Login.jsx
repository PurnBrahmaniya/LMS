import { useState, useEffect } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn, currentUser } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      // redirect based on role
      if (currentUser.role === "admin") navigate("/admin");
      else if (currentUser.role === "manager") navigate("/"); //CHANGE LATER
      else navigate("/"); //CHANGE LATER
    }
  }, [isLoggedIn, currentUser, navigate]);

  useEffect(() => {
    if (error) {
      setPass("");
    }
  }, [error]);

  const handleLogin = () => {
    if (email.trim() === "" || pass.trim() === "") return;
    dispatch(loginUser(email, pass));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-11/12 sm:w-6/12 md:w-4/12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Login
        </h2>

        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
          type="email"
          name="login-email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full px-4 py-2 mb-6 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
          type="password"
          name="login-pass"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <Button
          label={loading ? "Logging in..." : "Login"}
          fnClick={handleLogin}
        />
        {error && (
          <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
