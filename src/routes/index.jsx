import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { RegisterProvider } from "../contexts/RegisterContext";
import { UserProvider } from "../contexts/UserContext";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export function AllRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/register"
        element={
          <RegisterProvider>
            <RegisterPage />
          </RegisterProvider>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <UserProvider>
              <DashboardPage />
            </UserProvider>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
