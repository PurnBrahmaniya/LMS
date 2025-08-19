import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children, roles }) {
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !currentUser) {
      navigate("/login");
    }
  }, [isLoggedIn, currentUser, navigate]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (!roles.includes(currentUser.role)) {
      navigate("/404");
    }
  }, [currentUser, roles, navigate]);

  if (!isLoggedIn || !currentUser) {
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
