import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Home from "./PageComponents/Home";
import NotFound from "./PageComponents/NotFound";
import Login from "./PageComponents/Login";
import Approval from "./PageComponents/Approval";
import Admin from "./PageComponents/Admin";
import Request from "./PageComponents/Request";
import Dashboard from "./PageComponents/Dashboard";
import ProtectedRoute from "./features/auth/protectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute roles={["admin", "manager", "employee"]}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/approval"
              element={
                <ProtectedRoute roles={["admin", "manager"]}>
                  <Approval />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request"
              element={
                <ProtectedRoute roles={["admin", "manager", "employee"]}>
                  <Request />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute roles={["admin", "manager"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
